<script setup>
import { nextTick } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
import { useCartStore } from './stores/cart'

const cart = useCartStore()

async function refreshPageAnimations() {
  await nextTick()
  requestAnimationFrame(() => ScrollTrigger.refresh())
}
</script>

<template>
  <div class="min-h-screen bg-cream text-charcoal">
    <SiteHeader />
    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in" @after-enter="refreshPageAnimations">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter />
    <CartDrawer />
    <Transition name="toast">
      <div v-if="cart.toast" class="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-2xl" role="status">
        {{ cart.toast }}
      </div>
    </Transition>
  </div>
</template>
