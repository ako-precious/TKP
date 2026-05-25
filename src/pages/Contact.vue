<script setup>
import { whatsappLink } from '../data'
</script>

<template>
  <section class="bg-cream px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <p v-reveal class="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Contact us</p>
      <h1 v-reveal="'90ms'" class="mt-3 font-serif text-5xl font-black text-emerald-950">Tell us what you need</h1>
      <p v-reveal="'180ms'" class="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
        Send a message for orders, delivery questions, catering staples or product requests.
      </p>
    </div>
  </section>

  <section class="px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
      <form v-reveal class="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm" action="mailto:orders@thekenyanpantry.ca" method="post" enctype="text/plain">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="text-sm font-bold text-emerald-950">Name</span>
            <input class="form-field mt-2 w-full rounded-md border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800" name="name" type="text" required />
          </label>
          <label class="block">
            <span class="text-sm font-bold text-emerald-950">Email</span>
            <input class="form-field mt-2 w-full rounded-md border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800" name="email" type="email" required />
          </label>
        </div>
        <label class="mt-5 block">
          <span class="text-sm font-bold text-emerald-950">Phone</span>
          <input class="form-field mt-2 w-full rounded-md border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800" name="phone" type="tel" />
        </label>
        <label class="mt-5 block">
          <span class="text-sm font-bold text-emerald-950">Message or product request</span>
          <textarea class="form-field mt-2 min-h-36 w-full rounded-md border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800" name="message" required></textarea>
        </label>
        <div class="mt-6 flex flex-wrap gap-3">
          <button class="cta-shimmer relative overflow-hidden rounded-full bg-emerald-900 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-800" type="submit">
            Send Message
          </button>
          <a
            class="rounded-full bg-amber-500 px-6 py-3 text-sm font-black text-emerald-950 transition hover:bg-amber-400"
            :href="whatsappLink"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Ordering
          </a>
        </div>
      </form>

      <aside v-reveal="'130ms'" class="animated-card rounded-lg bg-emerald-950 p-6 text-amber-50">
        <h2 class="font-serif text-3xl font-black">Order details</h2>
        <div class="mt-6 space-y-5 text-sm leading-7 text-amber-50/80">
          <p>
            Serving Barrie, Hamilton and the GTA with Kenyan pantry staples, snacks, spices and hard-to-find grocery
            favourites.
          </p>
          <p>
            For fastest ordering, send your list through WhatsApp and include your city, preferred delivery time and
            any substitutions you will accept.
          </p>
        </div>
        <a
          class="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-black text-emerald-950 transition hover:bg-amber-400"
          :href="whatsappLink"
          target="_blank"
          rel="noreferrer"
        >
          Request a Product
        </a>
      </aside>
    </div>
  </section>
</template>
