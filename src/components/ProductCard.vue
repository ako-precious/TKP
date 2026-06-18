<script setup>
import { nextTick, ref } from 'vue'
import { Check, Minus, Plus, ShoppingBasket } from 'lucide-vue-next'
import gsap from 'gsap'
import { useCartStore } from '../stores/cart'
import { motion, prefersReducedMotion } from '../animations/motion'

const props = defineProps({ product: { type: Object, required: true } })
const quantity = ref(1)
const added = ref(false)
const card = ref(null)
const quantityDigit = ref(null)
const cart = useCartStore()
const money = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value)

async function changeQuantity(change) {
  quantity.value = Math.max(1, quantity.value + change)
  await nextTick()
  if (!prefersReducedMotion()) gsap.fromTo(quantityDigit.value, { scale: 1.45 }, { scale: 1, duration: motion.duration.fast, ease: motion.ease.spring })
}

function addToCart() {
  cart.add(props.product, quantity.value, card.value?.getBoundingClientRect())
  added.value = true
  window.setTimeout(() => (added.value = false), 1200)
}
</script>

<template>
  <article ref="card" class="product-card group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-basket/15 bg-white">
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
      <div class="product-actions mt-4 flex items-end justify-between"><div><strong class="text-xl text-forest">{{ money(product.price) }}</strong><span class="ml-1 text-xs text-charcoal/50">/ {{ product.unit }}</span></div><div class="quantity-control"><button type="button" aria-label="Decrease quantity" @click="changeQuantity(-1)"><Minus :size="14" /></button><span ref="quantityDigit">{{ quantity }}</span><button type="button" aria-label="Increase quantity" @click="changeQuantity(1)"><Plus :size="14" /></button></div></div>
      <button class="button-primary add-button mt-4 w-full justify-center" :class="{ 'is-added': added }" type="button" @click="addToCart">
        <Transition name="button-copy" mode="out-in"><span :key="added ? 'added' : 'add'" class="flex items-center gap-2"><Check v-if="added" :size="17" /><ShoppingBasket v-else :size="17" />{{ added ? 'Added!' : 'Add to Cart' }}</span></Transition>
      </button>
    </div>
  </article>
</template>
