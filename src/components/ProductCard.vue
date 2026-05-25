<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="flex h-full flex-col rounded-lg border border-emerald-900/10 bg-white p-5 shadow-sm">
    <div class="mb-5 flex h-24 items-center justify-center rounded-md bg-cream">
      <div class="grid h-16 w-16 place-items-center rounded-full bg-emerald-900 text-lg font-black text-amber-200">
        {{ product.name.slice(0, 2).toUpperCase() }}
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <p v-if="product.category" class="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
        {{ product.category }}
      </p>
      <h3 class="mt-2 font-serif text-2xl font-bold text-emerald-950">{{ product.name }}</h3>
      <p class="mt-3 flex-1 text-sm leading-6 text-stone-600">{{ product.description }}</p>
      <div class="mt-5 flex items-center justify-between gap-3">
        <span class="text-lg font-black text-emerald-950">{{ product.price }}</span>
        <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-emerald-950">Available</span>
      </div>
    </div>
  </article>
</template>
