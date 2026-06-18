<script setup>
import { Minus, Plus, ShoppingBasket, Trash2, X } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const money = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value)
</script>

<template>
  <Teleport to="body">
    <Transition name="fade"><button v-if="cart.isOpen" class="fixed inset-0 z-[60] bg-forest/55 backdrop-blur-sm" aria-label="Close cart" @click="cart.isOpen = false" /></Transition>
    <Transition name="drawer">
      <aside v-if="cart.isOpen" class="fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div class="flex items-center justify-between border-b border-basket/15 px-6 py-5">
          <div><p class="eyebrow">Your basket</p><h2 id="cart-title" class="mt-1 font-serif text-3xl font-black text-forest">{{ cart.itemCount }} item<span v-if="cart.itemCount !== 1">s</span></h2></div>
          <button class="icon-button" type="button" aria-label="Close cart" @click="cart.isOpen = false"><X /></button>
        </div>
        <div v-if="cart.items.length" class="flex-1 space-y-4 overflow-y-auto p-6">
          <article v-for="item in cart.items" :key="item.id" class="rounded-2xl border border-basket/15 bg-white p-4">
            <div class="flex justify-between gap-3"><div><h3 class="font-serif text-xl font-bold text-forest">{{ item.name }}</h3><p class="mt-1 text-sm text-charcoal/60">{{ money(item.price) }} · {{ item.unit }}</p></div><button type="button" class="text-terracotta" :aria-label="`Remove ${item.name}`" @click="cart.remove(item.id)"><Trash2 :size="18" /></button></div>
            <div class="mt-4 flex items-center justify-between">
              <div class="quantity-control"><button type="button" @click="cart.update(item.id, item.quantity - 1)"><Minus :size="15" /></button><span>{{ item.quantity }}</span><button type="button" @click="cart.update(item.id, item.quantity + 1)"><Plus :size="15" /></button></div>
              <strong class="text-forest">{{ money(item.price * item.quantity) }}</strong>
            </div>
          </article>
        </div>
        <div v-else class="grid flex-1 place-items-center px-8 text-center"><div><ShoppingBasket class="mx-auto text-basket/40" :size="48" /><h3 class="mt-4 font-serif text-2xl font-bold text-forest">Your basket is waiting</h3><p class="mt-2 text-sm leading-6 text-charcoal/65">Add a few pantry favourites and they’ll appear here.</p><RouterLink to="/shop" class="button-primary mt-5 inline-flex" @click="cart.isOpen = false">Browse the shop</RouterLink></div></div>
        <div v-if="cart.items.length" class="border-t border-basket/15 bg-white p-6"><div class="flex justify-between text-lg"><span>Subtotal</span><strong class="text-forest">{{ money(cart.subtotal) }}</strong></div><p class="mt-2 text-xs text-charcoal/55">Delivery and taxes are confirmed when your order is arranged.</p><button class="mt-5 w-full cursor-not-allowed rounded-full bg-basket/20 px-5 py-3 font-black text-basket" disabled title="Online checkout is coming soon">Checkout · Coming Soon</button></div>
      </aside>
    </Transition>
  </Teleport>
</template>

