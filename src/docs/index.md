# Vite Press

## Card and Grid Container  

1. Create the Grid Component  
Save this as .vitepress/theme/components/CardGrid.vue. It uses a <slot /> so you can nest your CustomCard components inside it in Markdown.

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
import CustomCard from './components/CustomCard.vue'
import CardGrid from './components/CardGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomCard', CustomCard)
    app.component('CardGrid', CardGrid)
  }
}
```

3. Usage in Markdown  
You can now wrap multiple cards in the grid. VitePress will render them side-by-side.

``` html
<CardGrid>
  <CustomCard 
    title="Getting Started" 
    description="Learn how to install and configure the project." 
    link="/guide/getting-started" 
  />
  <CustomCard 
    title="Components" 
    description="Browse the library of pre-built UI components." 
    link="/guide/components" 
  />
  <CustomCard 
    title="Advanced" 
    description="Deep dive into customization and internals." 
    link="/guide/advanced" 
  />
</CardGrid>
```



