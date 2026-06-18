<script setup>
import { ArrowRight, Clock } from 'lucide-vue-next'
import foodImage from '../assets/kenyan-food-table.png'
import { recipes } from '../data/recipes'
</script>

<template>
  <section class="page-hero"><div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><p v-reveal class="eyebrow text-maize">From our kitchen</p><h1 v-reveal="'80ms'" class="page-title">Recipes that taste<br />like coming home.</h1><p v-reveal="'160ms'" class="mt-5 max-w-2xl text-lg leading-8 text-cream/75">Four warm Kenyan favourites, written to be cooked, shared and made your own.</p></div></section>
  <section class="px-4 py-16 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2">
    <article v-for="(recipe, index) in recipes" :key="recipe.slug" v-reveal="{ variant: index % 2 ? 'weaveDown' : 'weaveUp', delay: index * 0.08 }" class="recipe-card group overflow-hidden rounded-[1.6rem] bg-white shadow-sm">
      <RouterLink :to="`/recipes/${recipe.slug}`" class="recipe-image-wrap relative block overflow-hidden"><img :src="foodImage" :alt="recipe.title" class="recipe-shared-image h-72 w-full object-cover transition duration-700 group-hover:scale-105" :style="{ objectPosition: recipe.imagePosition, viewTransitionName: `recipe-${recipe.slug}` }" /><span class="recipe-hover-overlay"><b>View Recipe</b><small><Clock class="clock-icon" :size="15" /> {{ recipe.totalTime }}</small></span></RouterLink>
      <div class="p-6 sm:p-7"><div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-terracotta"><Clock class="clock-icon" :size="16" /> {{ recipe.totalTime }}</div><h2 class="mt-3 font-serif text-3xl font-black text-forest">{{ recipe.title }}</h2><p class="mt-3 leading-7 text-charcoal/65">{{ recipe.excerpt }}</p><RouterLink :to="`/recipes/${recipe.slug}`" class="mt-5 inline-flex items-center gap-2 font-black text-terracotta">Cook this recipe <ArrowRight :size="17" /></RouterLink></div>
    </article>
  </div></section>
</template>
