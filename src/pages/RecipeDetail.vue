<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, Check, Clock, ShoppingBasket } from 'lucide-vue-next'
import foodImage from '../assets/kenyan-food-table.png'
import { recipes } from '../data/recipes'

const route = useRoute()
const recipe = computed(() => recipes.find((item) => item.slug === route.params.slug))
</script>

<template>
  <div v-if="recipe">
    <section class="bg-forest px-4 py-8 text-cream sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl"><RouterLink to="/recipes" class="inline-flex items-center gap-2 text-sm font-bold text-maize"><ArrowLeft :size="17" /> All recipes</RouterLink><div class="mt-7 grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr]"><div><p class="eyebrow text-maize">The Kenyan Pantry kitchen</p><h1 class="mt-4 font-serif text-5xl font-black leading-tight sm:text-6xl">{{ recipe.title }}</h1><p class="mt-5 text-lg leading-8 text-cream/72">{{ recipe.excerpt }}</p><div class="mt-6 flex flex-wrap gap-3 text-sm font-bold"><span class="time-pill"><Clock :size="17" /> Prep {{ recipe.prepTime }}</span><span class="time-pill"><Clock :size="17" /> Total {{ recipe.totalTime }}</span></div></div><img :src="foodImage" :alt="recipe.title" class="aspect-[5/3] w-full rounded-[2rem_0.7rem_2rem_0.7rem] object-cover shadow-2xl" :style="{ objectPosition: recipe.imagePosition }" /></div></div></section>
    <section class="px-4 py-16 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <aside><div class="sticky top-28 rounded-3xl bg-white p-7 shadow-sm"><h2 class="font-serif text-3xl font-black text-forest">Ingredients</h2><ul class="mt-6 space-y-4"><li v-for="ingredient in recipe.ingredients" :key="ingredient"><label class="flex cursor-pointer gap-3 leading-6 text-charcoal/75"><input type="checkbox" class="peer sr-only" /><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-basket/35 text-transparent peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white"><Check :size="13" /></span><span class="peer-checked:line-through peer-checked:opacity-50">{{ ingredient }}</span></label></li></ul><RouterLink :to="{ path: '/shop', query: { recipe: recipe.slug } }" class="button-primary mt-7 w-full justify-center"><ShoppingBasket :size="18" /> Shop the ingredients</RouterLink></div></aside>
      <div><p class="eyebrow">Method</p><h2 class="section-title mt-3">Let’s make it together.</h2><ol class="mt-8 space-y-7"><li v-for="(step, index) in recipe.steps" :key="step" class="flex gap-5"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-maize font-serif text-lg font-black text-forest">{{ index + 1 }}</span><p class="pt-1 leading-8 text-charcoal/72">{{ step }}</p></li></ol></div>
    </div></section>
  </div>
  <section v-else class="grid min-h-[60vh] place-items-center px-4 text-center"><div><h1 class="font-serif text-4xl font-black text-forest">Recipe not found</h1><RouterLink to="/recipes" class="button-primary mt-6">Back to recipes</RouterLink></div></section>
</template>

