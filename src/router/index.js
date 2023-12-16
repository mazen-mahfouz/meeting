import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import DoctorsPage from '@/components/DoctorsPage.vue'
import DoctorsdetailsPage from '@/components/DoctorsdetailsPage.vue'
import ServicesPage from '@/components/ServicesPage.vue'
import SpecialtiesPage from '@/components/SpecialtiesPage.vue'
import ContacusPage from '@/components/ContacusPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import PersonPage from '@/components/profilePages/PersonPage.vue'
import PasswordPage from '@/components/profilePages/PasswordPage.vue'
import WalletPage from '@/components/WalletPage.vue'
import NotfoundPage from '@/components/NotfoundPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: HomePage},
  {path: '/not-found', component: NotfoundPage},
  {path: '/about', component: AboutPage},
  {path: '/services', component: ServicesPage},
  {path: '/doctors', component: DoctorsPage},
  {path: '/doctor-details', component: DoctorsdetailsPage},
  {path: '/specialties', component: SpecialtiesPage},
  {path: '/contact-us', component: ContacusPage},
  {path: '/login', component: LoginPage},
  {path: '/register', component: RegisterPage},
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
