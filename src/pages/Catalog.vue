<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import gsap from 'gsap'
import ProductCard from '../components/ProductCard.vue'
import { categories, products } from '../data/products'
import { motion, prefersReducedMotion } from '../animations/motion'

const query = ref('')
const category = ref('All')
const tabs = ref(null)
const indicator = ref(null)
const tabButtons = ref([])
const filteredProducts = computed(() => products.filter((product) => {
  const matchesCategory = category.value === 'All' || product.category === category.value
  const matchesQuery = product.name.toLowerCase().includes(query.value.toLowerCase())
  return matchesCategory && matchesQuery
}))

async function selectCategory(item, index) {
  category.value = item
  await nextTick()
  moveIndicator(index)
}

function moveIndicator(index = categories.indexOf(category.value)) {
  const button = tabButtons.value[index]
  if (!button || !indicator.value) return
  const x = button.offsetLeft
  if (prefersReducedMotion()) gsap.set(indicator.value, { x, width: button.offsetWidth })
  else gsap.to(indicator.value, { x, width: button.offsetWidth, duration: 0.42, ease: motion.ease.organic })
}

onMounted(() => {
  nextTick(() => moveIndicator())
  window.addEventListener('resize', moveIndicator)
})
onBeforeUnmount(() => window.removeEventListener('resize', moveIndicator))
</script>

<template>
  <section class="page-hero">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><p v-reveal class="eyebrow text-maize">Shop now</p><h1 v-reveal="'80ms'" class="page-title">Stock the pantry.<br />Bring home the flavour.</h1><p v-reveal="'160ms'" class="mt-5 max-w-2xl text-lg leading-8 text-cream/75">Everyday flours, grains, spices and teas selected for the meals you know and love.</p></div>
  </section>
  <section class="px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="sticky top-20 z-30 rounded-2xl border border-basket/15 bg-cream/95 p-3 shadow-lg shadow-basket/5 backdrop-blur">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label class="relative block lg:w-80"><Search class="absolute left-4 top-1/2 -translate-y-1/2 text-basket" :size="19" /><span class="sr-only">Search products</span><input v-model="query" type="search" placeholder="Search the pantry..." class="form-field w-full rounded-full border border-basket/20 bg-white py-3 pl-11 pr-4 outline-none" /></label>
          <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0"><SlidersHorizontal class="hidden shrink-0 text-basket lg:block" :size="18" /><div ref="tabs" class="category-tabs relative flex items-center gap-2"><span ref="indicator" class="category-indicator absolute left-0 top-0 h-full rounded-full bg-forest" /><button v-for="(item, index) in categories" :key="item" :ref="(el) => { if (el) tabButtons[index] = el }" type="button" class="relative z-10 shrink-0 rounded-full px-4 py-2 text-xs font-black transition-colors" :class="category === item ? 'text-white' : 'text-forest hover:bg-maize/25'" @click="selectCategory(item, index)">{{ item }}</button></div></div>
        </div>
      </div>
      <TransitionGroup v-if="filteredProducts.length" name="product-grid" tag="div" class="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" /></TransitionGroup>
      <div v-else class="py-24 text-center"><p class="font-serif text-3xl font-black text-forest">Nothing in the basket yet.</p><p class="mt-2 text-charcoal/60">Try a different product name or category.</p><button class="button-outline mt-6" type="button" @click="query = ''; category = 'All'">Clear filters</button></div>
    </div>
  </section>
</template>
