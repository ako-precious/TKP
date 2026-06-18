import { onBeforeUnmount, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../animations/motion'

export function useScrollReveal(setup) {
  let context
  onMounted(() => {
    context = gsap.context(() => {
      if (!prefersReducedMotion()) setup?.({ gsap, ScrollTrigger })
    })
  })
  onBeforeUnmount(() => context?.revert())
}

