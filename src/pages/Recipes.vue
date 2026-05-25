<script setup>
import { recipes } from '../data'
</script>

<template>
  <section class="bg-cream px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <p class="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Recipes</p>
      <h1 class="mt-3 font-serif text-5xl font-black text-emerald-950">Cook with pantry staples</h1>
      <p class="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
        Simple Kenyan recipes built around easy-to-stock ingredients from the catalog.
      </p>
    </div>
  </section>

  <section class="px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
      <article v-for="recipe in recipes" :key="recipe.title" class="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm">
        <div class="flex items-start justify-between gap-4">
          <h2 class="font-serif text-3xl font-black leading-tight text-emerald-950">{{ recipe.title }}</h2>
          <span class="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-emerald-950">
            {{ recipe.cookTime }}
          </span>
        </div>

        <div class="mt-6">
          <h3 class="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Ingredients</h3>
          <ul class="mt-3 space-y-2 text-sm leading-6 text-stone-700">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
              <span>{{ ingredient }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-6">
          <h3 class="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Instructions</h3>
          <p class="mt-3 text-sm leading-7 text-stone-700">{{ recipe.instructions }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
