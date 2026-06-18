import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const motion = {
  duration: { fast: 0.24, base: 0.55, slow: 0.9 },
  ease: {
    organic: 'power3.out',
    poured: 'back.out(1.35)',
    spring: 'back.out(1.7)',
  },
  stagger: { tight: 0.055, normal: 0.08 },
}

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function revealElement(el, options = {}) {
  if (prefersReducedMotion()) {
    gsap.set(el, { clearProps: 'all', opacity: 1 })
    return
  }

  const variant = options.variant || 'up'
  const from = {
    up: { y: 28 },
    left: { x: -42 },
    right: { x: 42 },
    weaveUp: { y: 34, rotate: -1.2 },
    weaveDown: { y: -34, rotate: 1.2 },
    settle: { scale: 0.78, rotate: -4 },
  }[variant] || { y: 28 }

  gsap.fromTo(
    el,
    { autoAlpha: 0, ...from },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: options.duration || motion.duration.slow,
      delay: options.delay || 0,
      ease: variant === 'settle' ? motion.ease.spring : motion.ease.organic,
      scrollTrigger: {
        trigger: el,
        start: options.start || 'top 84%',
        once: true,
      },
    },
  )
}

export function installRevealDirective(app) {
  app.directive('reveal', {
    mounted(el, binding) {
      const raw = binding.value
      const options = typeof raw === 'object' ? raw : {}
      if (typeof raw === 'string') options.delay = Number.parseFloat(raw) / 1000 || 0
      revealElement(el, options)
    },
  })
}

export function createParallax(el, distance = 18) {
  if (!el || prefersReducedMotion()) return
  gsap.to(el, {
    y: distance,
    ease: 'none',
    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
  })
}

export function animateFlyingDot(rect) {
  if (!rect || prefersReducedMotion()) return
  const cart = document.querySelector('[data-cart-target]')
  if (!cart) return
  const target = cart.getBoundingClientRect()
  const dot = document.createElement('span')
  dot.className = 'flying-product-dot'
  document.body.appendChild(dot)
  gsap.set(dot, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  gsap.to(dot, {
    x: target.left + target.width / 2,
    y: target.top + target.height / 2,
    scale: 0.35,
    duration: 0.72,
    ease: 'power2.inOut',
    onComplete: () => dot.remove(),
  })
}

