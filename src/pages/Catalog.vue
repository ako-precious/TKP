<script setup>
import { computed, ref } from 'vue'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import ProductCard from '../components/ProductCard.vue'
import { categories, products } from '../data/products'

const query = ref('')
const category = ref('All')
const filteredProducts = computed(() => products.filter((product) => {
  const matchesCategory = category.value === 'All' || product.category === category.value
  const matchesQuery = product.name.toLowerCase().includes(query.value.toLowerCase())
  return matchesCategory && matchesQuery
}))
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
          <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0"><SlidersHorizontal class="hidden shrink-0 text-basket lg:block" :size="18" /><button v-for="item in categories" :key="item" type="button" class="shrink-0 rounded-full px-4 py-2 text-xs font-black transition" :class="category === item ? 'bg-forest text-white' : 'bg-white text-forest hover:bg-maize/25'" @click="category = item">{{ item }}</button></div>
        </div>
      </div>
      <div v-if="filteredProducts.length" class="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" /></div>
      <div v-else class="py-24 text-center"><p class="font-serif text-3xl font-black text-forest">Nothing in the basket yet.</p><p class="mt-2 text-charcoal/60">Try a different product name or category.</p><button class="button-outline mt-6" type="button" @click="query = ''; category = 'All'">Clear filters</button></div>
    </div>
  </section>
</template>

