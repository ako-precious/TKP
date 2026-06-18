import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'
import Recipes from './pages/Recipes.vue'
import RecipeDetail from './pages/RecipeDetail.vue'
import Contact from './pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'A Taste of Home' } },
    { path: '/shop', name: 'shop', component: Catalog, meta: { title: 'Shop Kenyan Groceries' } },
    { path: '/recipes', name: 'recipes', component: Recipes, meta: { title: 'Kenyan Recipes' } },
    { path: '/recipes/:slug', name: 'recipe', component: RecipeDetail, meta: { title: 'Recipe' } },
    { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact Us' } },
  ],
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | The Kenyan Pantry`
})

export default router

