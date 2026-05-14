# 自定义卡片组件

## Custom Card 

1. Create the Card Component  
Create a file at .vitepress/theme/components/vcard.vue. This design uses a modern, elevated style with a hover effect and support for images.

``` html
<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  image: String
})
</script>

<template>
  <a :href="link" class="custom-card">
    <div v-if="image" class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.custom-card {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s, border-color 0.2s;
  text-decoration: none !important;
  overflow: hidden;
}

.custom-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
}

.card-image {
  height: 160px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.card-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>

```

2.  Register Globally  
To use this component in any .md file, register it in .vitepress/theme/index.js (or .ts).

``` ts
import DefaultTheme from 'vitepress/theme'
import vcard from './components/vcard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register the component globally
    app.component('vcard', vcard)
  }
}
```

3. Use in Markdown  
Now you can drop the card anywhere in your documentation. Make sure to use PascalCase for the component tag to avoid hydration issues.

``` html
<vcard 
  title="API Reference" 
  description="Explore our comprehensive API documentation." 
  link="/api/" 
  image="/hero-bg.png" 
/>

```


## Grid Container  
1. Create the Grid Component  
Save this as .vitepress/theme/components/vgrid.vue. It uses a <slot /> so you can nest your vcard components inside it in Markdown.



``` html
<template>
  <div class="card-grid">
    <slot />
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  /* Adjust 250px to your preferred minimum card width */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>

```

2. Register Globally  
Update your .vitepress/theme/index.js to include the new grid component:

``` javascript
import DefaultTheme from 'vitepress/theme'
import vcard from './components/vcard.vue'
import vgrid from './components/vgrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('vcard', vcard)
    app.component('vgrid', vgrid)
  }
}
```


3. Usage in Markdown  
You can now wrap multiple cards in the grid. VitePress will render them side-by-side.

``` html
<vgrid>
  <vcard 
    title="Getting Started" 
    description="Learn how to install and configure the project." 
    link="/guide/getting-started" 
  />
  <vcard 
    title="Components" 
    description="Browse the library of pre-built UI components." 
    link="/guide/components" 
  />
  <vcard 
    title="Advanced" 
    description="Deep dive into customization and internals." 
    link="/guide/advanced" 
  />
</vgrid>
```

## Sample page

* [Card Sample](card).