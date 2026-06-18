<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Menu, ShoppingBasket, X } from 'lucide-vue-next'
import { useWindowScroll } from '@vueuse/core'
import gsap from 'gsap'
import { useCartStore } from '../stores/cart'
import { animateFlyingDot, motion, prefersReducedMotion } from '../animations/motion'

const menuOpen = ref(false)
const cartButton = ref(null)
const logoIntro = ref(false)
const cart = useCartStore()
const { y } = useWindowScroll()
const compact = computed(() => y.value > 34)
const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop Now' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/contact', label: 'Contact Us' },
]

function animateCart(event) {
  animateFlyingDot(event.detail.originRect)
  if (!prefersReducedMotion()) {
    gsap.fromTo(cartButton.value, { scale: 1 }, { scale: 1.18, duration: 0.18, yoyo: true, repeat: 1, ease: motion.ease.spring })
  }
}

watch(menuOpen, async (open) => {
  if (!open || prefersReducedMotion()) return
  await nextTick()
  gsap.from('.mobile-nav-item', { x: 22, autoAlpha: 0, duration: 0.42, stagger: 0.06, ease: motion.ease.spring })
})

onMounted(() => {
  window.addEventListener('cart:item-added', animateCart)
  if (!sessionStorage.getItem('tkp-logo-seen') && !prefersReducedMotion()) {
    logoIntro.value = true
    sessionStorage.setItem('tkp-logo-seen', '1')
  }
})
onBeforeUnmount(() => window.removeEventListener('cart:item-added', animateCart))
</script>

<template>
  <header class="site-header sticky top-0 z-50 border-b border-basket/15 bg-cream/95 backdrop-blur-lg" :class="{ 'is-compact': compact }">
    <nav class="header-nav mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <RouterLink to="/" class="group flex items-center gap-3" @click="menuOpen = false">
        <span class="logo-seal relative grid h-12 w-12 place-items-center rounded-full border-2 border-terracotta bg-forest font-serif text-sm font-black text-maize">
          <svg v-if="logoIntro" class="logo-arc absolute -inset-2 h-16 w-16" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 37C8 16 22 6 32 6s24 10 24 31" fill="none" stroke="#D9A441" stroke-width="2" stroke-linecap="round" /></svg>
          TKP
        </span>
        <span class="logo-wordmark leading-none" :class="{ 'logo-wordmark-intro': logoIntro }">
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
        <button ref="cartButton" data-cart-target class="relative grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition hover:bg-white" type="button" aria-label="Open shopping cart" @click="cart.isOpen = true">
          <ShoppingBasket :size="21" />
          <Transition name="badge" mode="out-in"><span v-if="cart.itemCount" :key="cart.itemCount" class="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-maize px-1 text-[11px] font-black text-forest">{{ cart.itemCount }}</span></Transition>
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
          <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="mobile-nav-item rounded-xl px-4 py-3 font-bold text-forest hover:bg-white" @click="menuOpen = false">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
