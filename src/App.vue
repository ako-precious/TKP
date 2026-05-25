<script setup>
import { computed, onMounted, ref } from 'vue'
import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'
import Recipes from './pages/Recipes.vue'
import Contact from './pages/Contact.vue'
import { whatsappLink } from './data'

const pages = [
  { key: 'home', label: 'Home' },
  { key: 'catalog', label: 'Shop Now' },
  { key: 'recipes', label: 'Recipes' },
  { key: 'contact', label: 'Contact Us' },
]

const pageComponents = {
  home: Home,
  catalog: Catalog,
  recipes: Recipes,
  contact: Contact,
}

const currentPage = ref('home')

const currentComponent = computed(() => pageComponents[currentPage.value] ?? Home)

function goTo(page) {
  currentPage.value = page
  window.location.hash = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function syncFromHash() {
  const hash = window.location.hash.replace('#', '')
  currentPage.value = pages.some((page) => page.key === hash) ? hash : 'home'
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-900">
    <header class="sticky top-0 z-40 border-b border-emerald-900/10 bg-cream/95 shadow-sm shadow-emerald-950/5 backdrop-blur">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button class="group flex items-center gap-3 text-left" type="button" @click="goTo('home')">
          <span class="brand-mark grid h-11 w-11 place-items-center rounded-full bg-emerald-900 text-lg font-black text-amber-100">
            TKP
          </span>
          <span>
            <span class="block font-serif text-xl font-bold leading-none text-emerald-950">The Kenyan Pantry</span>
            <span class="text-xs font-medium uppercase tracking-[0.18em] text-emerald-800">Authentic Kenyan flavour</span>
          </span>
        </button>

        <div class="hidden items-center gap-1 md:flex">
          <button
            v-for="page in pages"
            :key="page.key"
            type="button"
            class="nav-pill relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition hover:text-white"
            :class="currentPage === page.key ? 'is-active bg-emerald-900 text-white' : 'text-emerald-950'"
            @click="goTo(page.key)"
          >
            {{ page.label }}
          </button>
        </div>

        <a
          class="cta-shimmer hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-amber-400 sm:inline-flex"
          :href="whatsappLink"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Order
        </a>
      </nav>

      <div class="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        <button
          v-for="page in pages"
          :key="page.key"
          type="button"
          class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold"
          :class="currentPage === page.key ? 'bg-emerald-900 text-white' : 'bg-white text-emerald-950'"
          @click="goTo(page.key)"
        >
          {{ page.label }}
        </button>
      </div>
    </header>

    <main>
      <Transition name="page" mode="out-in">
        <component :is="currentComponent" :key="currentPage" @navigate="goTo" />
      </Transition>
    </main>

    <footer class="border-t border-emerald-900/10 bg-emerald-950 px-4 py-10 text-amber-50">
      <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p class="font-serif text-2xl font-bold">The Kenyan Pantry</p>
          <p class="mt-3 max-w-md text-sm leading-6 text-amber-50/75">
            Authentic Kenyan groceries and flavours delivered across Barrie, Hamilton and the GTA.
          </p>
        </div>
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Shop</p>
          <button class="mt-3 text-sm text-amber-50/80 hover:text-white" type="button" @click="goTo('catalog')">
            Browse the catalog
          </button>
        </div>
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Order</p>
          <a class="mt-3 inline-block text-sm text-amber-50/80 hover:text-white" :href="whatsappLink" target="_blank" rel="noreferrer">
            Start a WhatsApp order
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
