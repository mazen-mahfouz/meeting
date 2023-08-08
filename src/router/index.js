import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import SubjectPage from '@/components/SubjectPage.vue'
import BlogPage from '@/components/BlogPage.vue'
import ServicesPage from '@/components/ServicesPage.vue'
import ContacusPage from '@/components/ContacusPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import PersonPage from '@/components/profilePages/PersonPage.vue'
import PasswordPage from '@/components/profilePages/PasswordPage.vue'
import WalletPage from '@/components/WalletPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: HomePage},
  {path: '/about', component: AboutPage},
  {path: '/blog', component: BlogPage},
  {path: '/subject', component: SubjectPage},
  {path: '/services-features', component: ServicesPage},
  {path: '/contact-us', component: ContacusPage},
  {path: '/profile', component: ProfilePage, children: [
    { path: 'person', name: 'person', component: PersonPage },
    { path: 'password', name: 'password', component: PasswordPage }
  ],},
  {path: '/my-walle', component: WalletPage},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) =>{
  window.scrollTo(0,0)
  next()
})

export default router
