<script setup>
import { ref } from 'vue'
import { Minus, Plus, ShoppingBasket } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart'

const props = defineProps({ product: { type: Object, required: true } })
const quantity = ref(1)
const cart = useCartStore()
const money = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value)
</script>

<template>
  <article class="product-card group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-basket/15 bg-white">
    <div class="relative grid h-48 place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_30%,#fff8ea,#eadbc4)]">
      <span v-if="product.badge" class="absolute left-3 top-3 z-10 -rotate-2 rounded-sm bg-maize px-3 py-1 text-[10px] font-black uppercase tracking-wider text-forest">{{ product.badge }}</span>
      <div class="product-pack grid h-28 w-24 place-items-center rounded-lg border border-basket/20 bg-cream shadow-lg">
        <span class="text-center"><b class="block font-serif text-3xl text-forest">{{ product.initials }}</b><small class="mt-2 block px-2 text-[9px] font-black uppercase tracking-widest text-terracotta">Kenyan Pantry</small></span>
      </div>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <p class="text-[10px] font-black uppercase tracking-[0.18em] text-terracotta">{{ product.category }}</p>
      <h3 class="mt-2 font-serif text-2xl font-black text-forest">{{ product.name }}</h3>
      <p class="mt-2 flex-1 text-sm leading-6 text-charcoal/65">{{ product.description }}</p>
      <div class="mt-4 flex items-end justify-between"><div><strong class="text-xl text-forest">{{ money(product.price) }}</strong><span class="ml-1 text-xs text-charcoal/50">/ {{ product.unit }}</span></div><div class="quantity-control"><button type="button" aria-label="Decrease quantity" @click="quantity = Math.max(1, quantity - 1)"><Minus :size="14" /></button><span>{{ quantity }}</span><button type="button" aria-label="Increase quantity" @click="quantity++"><Plus :size="14" /></button></div></div>
      <button class="button-primary mt-4 w-full justify-center" type="button" @click="cart.add(props.product, quantity)"><ShoppingBasket :size="17" /> Add to Cart</button>
    </div>
  </article>
</template>
