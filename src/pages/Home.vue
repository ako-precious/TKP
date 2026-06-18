<script setup>
import { ArrowRight, BadgeCheck, MessageCircle, Truck } from 'lucide-vue-next'
import heroImage from '../assets/kenyan-pantry-hero.png'
import foodImage from '../assets/kenyan-food-table.png'
import ProductCard from '../components/ProductCard.vue'
import { featuredProducts } from '../data/products'
</script>

<template>
  <section class="hero-pattern relative overflow-hidden bg-forest">
    <div class="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
      <div class="relative z-10 text-cream">
        <p v-reveal class="eyebrow text-maize">Taste of home, delivered</p>
        <h1 v-reveal="'80ms'" class="mt-5 max-w-xl font-serif text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">Welcome to The Kenyan Pantry!</h1>
        <p v-reveal="'160ms'" class="mt-6 max-w-xl text-lg leading-8 text-cream/78">Authentic Kenyan groceries and flavours delivered across Barrie, Hamilton and the GTA.</p>
        <div v-reveal="'240ms'" class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/shop" class="button-accent">Shop Now <ArrowRight :size="18" /></RouterLink>
          <RouterLink to="/recipes" class="button-ghost">Find a recipe</RouterLink>
        </div>
      </div>
      <div v-reveal="'120ms'" class="relative">
        <div class="absolute -inset-5 rounded-[45%_55%_58%_42%] border border-maize/30"></div>
        <img :src="heroImage" alt="Kenyan pantry staples arranged on a warm kitchen table" class="relative aspect-[5/4] w-full rounded-[3rem_1rem_3rem_1rem] object-cover shadow-2xl shadow-black/35" />
        <div class="absolute -bottom-5 left-5 rounded-2xl bg-cream px-5 py-4 text-forest shadow-xl"><p class="font-serif text-xl font-black">Familiar flavours.</p><p class="text-xs font-bold uppercase tracking-widest text-terracotta">Right at your table</p></div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div v-reveal class="relative"><img :src="foodImage" alt="Kenyan dishes and pantry ingredients on a family table" class="aspect-[5/4] w-full rounded-[1rem_3rem_1rem_3rem] object-cover shadow-xl" /><span class="absolute -bottom-5 -right-2 rounded-full bg-maize px-6 py-5 font-script text-2xl font-bold text-forest sm:right-5">Karibu nyumbani</span></div>
      <div v-reveal="'120ms'">
        <p class="eyebrow">Our story</p>
        <h2 class="section-title mt-3">Food is culture, home and connection.</h2>
        <div class="mt-6 space-y-4 leading-8 text-charcoal/72">
          <p>At The Kenyan Pantry, we believe food is more than just ingredients — it is culture, home, and connection.</p>
          <p>We started The Kenyan Pantry to help Kenyans across Ontario access authentic groceries, spices, teas, flours and other pantry staples and get that feeling of home. Whether you're preparing Ugali, chapati, ndengu or a cup of chai, we're here to bring those familiar flavours and tastes to your kitchen and table.</p>
        </div>
        <RouterLink to="/contact" class="mt-7 inline-flex items-center gap-2 font-black text-terracotta">Meet us & get in touch <ArrowRight :size="17" /></RouterLink>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div v-reveal class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p class="eyebrow">Pantry favourites</p><h2 class="section-title mt-3">A little taste of home</h2></div><RouterLink to="/shop" class="button-outline">View Full Catalog <ArrowRight :size="17" /></RouterLink></div>
      <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"><div v-for="(product, index) in featuredProducts" :key="product.id" v-reveal="`${index * 65}ms`"><ProductCard :product="product" /></div></div>
    </div>
  </section>

  <section class="border-y border-basket/15 bg-maize/15 px-4 py-8">
    <div class="mx-auto grid max-w-7xl gap-5 text-sm font-bold text-forest md:grid-cols-3">
      <p class="flex items-center justify-center gap-3"><Truck class="text-terracotta" /> Delivering across Barrie, Hamilton & the GTA</p>
      <p class="flex items-center justify-center gap-3"><BadgeCheck class="text-terracotta" /> 100% authentic Kenyan favourites</p>
      <a href="https://wa.me/17052849804" class="flex items-center justify-center gap-3"><MessageCircle class="text-terracotta" /> Order directly via WhatsApp</a>
    </div>
  </section>
</template>

