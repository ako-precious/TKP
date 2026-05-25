<script setup>
import heroImage from '../assets/kenyan-pantry-hero.png'
import ProductCard from '../components/ProductCard.vue'
import { featuredProducts, whatsappLink } from '../data'

defineEmits(['navigate'])
</script>

<template>
  <section class="bg-cream">
    <div class="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <p v-reveal class="text-sm font-bold uppercase tracking-[0.24em] text-emerald-800">Barrie, Hamilton and the GTA</p>
        <h1 v-reveal="'90ms'" class="mt-5 max-w-3xl font-serif text-5xl font-black leading-[1.02] text-emerald-950 sm:text-6xl">
          Welcome to The Kenyan Pantry
        </h1>
        <p v-reveal="'180ms'" class="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          Authentic Kenyan groceries, spices, snacks and pantry staples for everyday meals, celebrations and the tastes
          that feel like home.
        </p>
        <div v-reveal="'270ms'" class="mt-8 flex flex-wrap gap-3">
          <button
            class="cta-shimmer relative overflow-hidden rounded-full bg-emerald-900 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-800"
            type="button"
            @click="$emit('navigate', 'catalog')"
          >
            Shop Now
          </button>
          <a
            class="rounded-full border border-emerald-900 px-6 py-3 text-sm font-black text-emerald-950 transition hover:bg-white"
            :href="whatsappLink"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Ordering
          </a>
        </div>
      </div>

      <div v-reveal="'160ms'" class="relative">
        <div class="hero-glow"></div>
        <img
          class="hero-image relative aspect-[4/3] w-full rounded-lg object-cover shadow-2xl shadow-emerald-950/20"
          :src="heroImage"
          alt="Kenyan pantry groceries arranged on a warm kitchen table"
        />
        <div class="absolute bottom-5 left-5 rounded-lg bg-emerald-950/90 px-4 py-3 text-amber-50 shadow-xl backdrop-blur">
          <p class="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Simple order flow</p>
          <p class="mt-1 text-sm font-semibold">Browse, message, enjoy.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div v-reveal class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Featured products</p>
          <h2 class="mt-2 font-serif text-4xl font-black text-emerald-950">Pantry favourites</h2>
        </div>
        <button
          class="w-fit rounded-full bg-amber-500 px-5 py-2.5 text-sm font-black text-emerald-950 transition hover:bg-amber-400"
          type="button"
          @click="$emit('navigate', 'catalog')"
        >
          View Catalog
        </button>
      </div>

      <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="(product, index) in featuredProducts" :key="product.name" v-reveal="`${index * 90}ms`">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
    <div v-reveal class="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
      <div>
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">About</p>
        <h2 class="mt-2 font-serif text-4xl font-black text-emerald-950">Groceries with a familiar rhythm</h2>
      </div>
      <p class="text-base leading-8 text-stone-700 md:col-span-2">
        The Kenyan Pantry is a simple way to find the ingredients you miss most: ugali flour, tea, pilau spices,
        snacks, grains and everyday household favourites. Order through WhatsApp, ask for what you need, and request
        products you want stocked next.
      </p>
    </div>
    <div v-reveal="'130ms'" class="path-line mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
      <div class="relative rounded-lg bg-cream p-5 pl-16">
        <span class="absolute left-3 top-4 grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-sm font-black text-emerald-950">1</span>
        <h3 class="font-serif text-2xl font-black text-emerald-950">Find favourites</h3>
        <p class="mt-2 text-sm leading-6 text-stone-700">Scan featured staples and grouped categories quickly.</p>
      </div>
      <div class="relative rounded-lg bg-cream p-5 pl-16">
        <span class="absolute left-3 top-4 grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-sm font-black text-emerald-950">2</span>
        <h3 class="font-serif text-2xl font-black text-emerald-950">Message the list</h3>
        <p class="mt-2 text-sm leading-6 text-stone-700">WhatsApp keeps ordering direct and low-friction.</p>
      </div>
      <div class="relative rounded-lg bg-cream p-5 pl-16">
        <span class="absolute left-3 top-4 grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-sm font-black text-emerald-950">3</span>
        <h3 class="font-serif text-2xl font-black text-emerald-950">Request more</h3>
        <p class="mt-2 text-sm leading-6 text-stone-700">Ask for hard-to-find products to stock next.</p>
      </div>
    </div>
  </section>
</template>
