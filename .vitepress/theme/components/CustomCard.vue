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
