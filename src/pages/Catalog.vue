<script setup>
import ProductCard from '../components/ProductCard.vue'
import { categories, whatsappLink } from '../data'

defineEmits(['navigate'])
</script>

<template>
  <section class="bg-cream px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Shop now</p>
        <h1 class="mt-3 font-serif text-5xl font-black text-emerald-950">Product catalog</h1>
        <p class="mt-5 text-lg leading-8 text-stone-700">
          Browse staples by category, then place an order or request a product through WhatsApp.
        </p>
      </div>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          class="rounded-full bg-emerald-900 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
          :href="whatsappLink"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Order
        </a>
        <button
          class="rounded-full border border-emerald-900 px-6 py-3 text-sm font-black text-emerald-950 transition hover:bg-white"
          type="button"
          @click="$emit('navigate', 'contact')"
        >
          Request a Product
        </button>
      </div>
    </div>
  </section>

  <section class="px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl space-y-12">
      <div v-for="category in categories" :key="category.name">
        <div class="mb-5 flex items-center gap-4">
          <h2 class="font-serif text-3xl font-black text-emerald-950">{{ category.name }}</h2>
          <div class="h-px flex-1 bg-emerald-900/15"></div>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="product in category.products" :key="product.name" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>
