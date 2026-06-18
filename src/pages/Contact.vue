<script setup>
import { reactive, ref } from 'vue'
import { Mail, MapPin, MessageCircle, PackagePlus, Phone, X } from 'lucide-vue-next'

const sent = ref(false)
const requestOpen = ref(false)
const requestSent = ref(false)
const form = reactive({ name: '', phone: '', email: '', message: '' })
const request = reactive({ product: '', reason: '', email: '' })

function submitContact() {
  sent.value = true
  // TODO: Replace this client-side success state with the production form API.
}
function submitRequest() {
  requestSent.value = true
  // TODO: Send product requests to the store owner's backend or CRM.
}
</script>

<template>
  <section class="page-hero"><div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><p v-reveal class="eyebrow text-maize">Contact us</p><h1 v-reveal="'80ms'" class="page-title max-w-4xl">Have questions, special requests or product suggestions?</h1><p v-reveal="'160ms'" class="mt-5 text-lg text-cream/75">We’d love to hear from you.</p></div></section>
  <section class="px-4 py-16 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.75fr_1.25fr]">
    <aside v-reveal class="rounded-3xl bg-forest p-7 text-cream sm:p-9"><p class="eyebrow text-maize">Come say hello</p><h2 class="mt-3 font-serif text-4xl font-black">We’re here to help.</h2><p class="mt-4 leading-7 text-cream/70">Ask about delivery, availability or the Kenyan favourite you’ve been missing.</p><div class="mt-8 space-y-5">
      <a href="mailto:memoirsbyk@outlook.com" class="contact-row"><Mail /><span><small>Email</small>memoirsbyk@outlook.com</span></a>
      <a href="tel:+16476796760" class="contact-row"><Phone /><span><small>Phone</small>647-679-6760</span></a>
      <a href="https://wa.me/17052849804" target="_blank" rel="noreferrer" class="contact-row"><MessageCircle /><span><small>WhatsApp ordering</small>705-284-9804</span></a>
      <div class="contact-row"><MapPin /><span><small>Service area</small>Barrie, Hamilton & the GTA</span></div>
    </div><button class="button-accent mt-9 w-full justify-center" type="button" @click="requestOpen = true"><PackagePlus :size="18" /> Request a Product</button></aside>
    <form v-reveal="'100ms'" class="rounded-3xl border border-basket/15 bg-white p-7 shadow-sm sm:p-9" @submit.prevent="submitContact">
      <div v-if="sent" class="rounded-2xl bg-maize/20 p-5 text-forest"><h2 class="font-serif text-2xl font-black">Asante! Your message is ready.</h2><p class="mt-2 text-sm leading-6">This demo has validated your details. Connect the marked form API before launch to deliver submissions.</p></div>
      <template v-else><h2 class="font-serif text-3xl font-black text-forest">Send us a message</h2><div class="mt-7 grid gap-5 sm:grid-cols-2"><label class="field-label">Name<input v-model.trim="form.name" class="form-field" required minlength="2" autocomplete="name" /></label><label class="field-label">Phone Number<input v-model.trim="form.phone" class="form-field" required type="tel" pattern="[0-9+() -]{7,}" autocomplete="tel" /></label><label class="field-label sm:col-span-2">Email<input v-model.trim="form.email" class="form-field" required type="email" autocomplete="email" /></label><label class="field-label sm:col-span-2">Message<textarea v-model.trim="form.message" class="form-field min-h-36 resize-y" required minlength="10"></textarea></label></div><button class="button-primary mt-6" type="submit">Send Message</button></template>
    </form>
  </div></section>

  <Teleport to="body"><Transition name="fade"><div v-if="requestOpen" class="fixed inset-0 z-[70] grid place-items-center bg-forest/65 p-4 backdrop-blur-sm" @click.self="requestOpen = false"><form class="w-full max-w-lg rounded-3xl bg-cream p-7 shadow-2xl" @submit.prevent="submitRequest"><div class="flex items-start justify-between"><div><p class="eyebrow">Special request</p><h2 class="mt-2 font-serif text-3xl font-black text-forest">What should we stock?</h2></div><button class="icon-button" type="button" aria-label="Close request form" @click="requestOpen = false"><X /></button></div><div v-if="requestSent" class="mt-6 rounded-2xl bg-maize/20 p-5 text-forest"><strong>Request received — asante!</strong><p class="mt-1 text-sm">We’ll use your suggestion when planning future stock.</p></div><div v-else class="mt-6 grid gap-5"><label class="field-label">Product Name<input v-model.trim="request.product" class="form-field" required minlength="2" /></label><label class="field-label">Description / Why you want it<textarea v-model.trim="request.reason" class="form-field min-h-28" required minlength="8"></textarea></label><label class="field-label">Email <span class="font-normal text-charcoal/45">(optional)</span><input v-model.trim="request.email" class="form-field" type="email" /></label><button class="button-primary justify-center" type="submit">Send Product Request</button></div></form></div></Transition></Teleport>
</template>
