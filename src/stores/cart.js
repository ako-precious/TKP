import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)
  const toast = ref('')
  let toastTimer

  const itemCount = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const subtotal = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  function add(product, quantity = 1, originRect = null) {
    const existing = items.value.find((item) => item.id === product.id)
    if (existing) existing.quantity += quantity
    else items.value.push({ ...product, quantity })
    toast.value = `${product.name} added to your basket`
    window.dispatchEvent(new CustomEvent('cart:item-added', { detail: { originRect } }))
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => (toast.value = ''), 2600)
  }

  function update(id, quantity) {
    if (quantity < 1) return remove(id)
    const item = items.value.find((entry) => entry.id === id)
    if (item) item.quantity = quantity
  }

  function remove(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items, isOpen, toast, itemCount, subtotal, add, update, remove }
})
