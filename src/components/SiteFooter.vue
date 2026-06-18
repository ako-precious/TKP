<script setup>
import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-forest text-cream">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div class="lg:col-span-2">
        <p class="font-serif text-3xl font-black">The Kenyan Pantry</p>
        <p class="mt-3 max-w-md leading-7 text-cream/70">Taste of home, delivered. Authentic Kenyan staples for tables across Barrie, Hamilton and the GTA.</p>
        <div class="mt-5 flex gap-3">
          <a href="#" aria-label="Instagram" class="social-button"><Instagram :size="19" /></a>
          <a href="#" aria-label="Facebook" class="social-button"><Facebook :size="19" /></a>
        </div>
      </div>
      <div>
        <h2 class="footer-heading">Explore</h2>
        <div class="mt-4 grid gap-3 text-sm text-cream/75">
          <RouterLink to="/">Home</RouterLink><RouterLink to="/shop">Shop Now</RouterLink><RouterLink to="/recipes">Recipes</RouterLink><RouterLink to="/contact">Contact Us</RouterLink>
        </div>
      </div>
      <div>
        <h2 class="footer-heading">Get in touch</h2>
        <div class="mt-4 grid gap-3 text-sm text-cream/75">
          <a class="flex items-center gap-2" href="mailto:memoirsbyk@outlook.com"><Mail :size="16" /> memoirsbyk@outlook.com</a>
          <a class="flex items-center gap-2" href="tel:+16476796760"><Phone :size="16" /> 647-679-6760</a>
          <a class="flex items-center gap-2" href="https://wa.me/17052849804" target="_blank" rel="noreferrer"><MessageCircle :size="16" /> WhatsApp ordering</a>
        </div>
      </div>
    </div>
    <div class="border-t border-cream/10 px-4 py-5 text-center text-xs text-cream/55">© {{ new Date().getFullYear() }} The Kenyan Pantry. All rights reserved.</div>
  </footer>
</template>

