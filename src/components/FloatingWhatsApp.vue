<script setup>
import { MessageCircle } from 'lucide-vue-next'

const whatsappUrl =
  'https://wa.me/17052849804?text=Hi%20The%20Kenyan%20Pantry%2C%20I%27d%20like%20to%20place%20an%20order.'
</script>

<template>
  <a
    :href="whatsappUrl"
    class="floating-whatsapp group"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Order through WhatsApp"
    title="Order through WhatsApp"
  >
    <span class="floating-whatsapp-label">Order via WhatsApp</span>
    <MessageCircle :size="25" aria-hidden="true" />
  </a>
</template>

