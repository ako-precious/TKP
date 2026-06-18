<script setup>
import { ref } from 'vue'
import { Menu, ShoppingBasket, X } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart'

const menuOpen = ref(false)
const cart = useCartStore()
const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop Now' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/contact', label: 'Contact Us' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-basket/15 bg-cream/95 backdrop-blur-lg">
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <RouterLink to="/" class="group flex items-center gap-3" @click="menuOpen = false">
        <span class="logo-seal grid h-12 w-12 place-items-center rounded-full border-2 border-terracotta bg-forest font-serif text-sm font-black text-maize">TKP</span>
        <span class="leading-none">
          <span class="block font-serif text-lg font-black tracking-tight text-forest sm:text-xl">The Kenyan</span>
          <span class="mt-1 block text-xs font-black uppercase tracking-[0.3em] text-terracotta">Pantry</span>
        </span>
      </RouterLink>

      <div class="hidden items-center gap-7 lg:flex">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link text-sm font-bold text-forest">
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <RouterLink to="/shop" class="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8f3826] sm:inline-flex">
          Shop Now
        </RouterLink>
        <button class="relative grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition hover:bg-white" type="button" aria-label="Open shopping cart" @click="cart.isOpen = true">
          <ShoppingBasket :size="21" />
          <span v-if="cart.itemCount" class="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-maize px-1 text-[11px] font-black text-forest">{{ cart.itemCount }}</span>
        </button>
        <button class="grid h-11 w-11 place-items-center rounded-full text-forest lg:hidden" type="button" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
          <X v-if="menuOpen" />
          <Menu v-else />
        </button>
      </div>
    </nav>

    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="border-t border-basket/10 bg-cream px-4 py-5 lg:hidden">
        <div class="mx-auto flex max-w-7xl flex-col gap-2">
          <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-xl px-4 py-3 font-bold text-forest hover:bg-white" @click="menuOpen = false">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

