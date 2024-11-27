import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '../views/PaginaInicio.vue'
import PaginaCuidados from '../views/PaginaCuidados.vue'
import PaginaCulinaria from '../views/PaginaCulinaria.vue'
import PaginaLimpeza from '../views/PaginaLimpeza.vue'
import PaginaLogin from '../views/PaginaLogin.vue'
import PaginaSignup from '../views/PaginaSignup.vue'
import PaginaManutencao from '../views/PaginaManutencao.vue'
import SoliciteServico from '../views/SoliciteServico.vue'
import PaginaCheckout from '../views/PaginaCheckout.vue'
import PaginaPerfil from '../views/PaginaPerfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PaginaInicio',
      component: PaginaInicio
    },
    {
      path: '/PaginaCuidados',
      name: 'PaginaCuidados',
      component: PaginaCuidados
    },
    {
      path: '/PaginaCulinaria',
      name: 'PaginaCulinaria',
      component: PaginaCulinaria
    },
    {
      path: '/PaginaLimpeza',
      name: 'PaginaLimpeza',
      component: PaginaLimpeza
    },
    {
      path: '/PaginaLogin',
      name: 'PaginaLogin',
      component: PaginaLogin
    },
    {
      path: '/PaginaSignup',
      name: 'PaginaSignup',
      component: PaginaSignup
    },

    {
      path: '/PaginaManutencao',
      name: 'PaginaManutencao',
      component: PaginaManutencao
    },
    {
      path: '/SoliciteServico',
      name: 'SoliciteServico',
      component: SoliciteServico
    },
    {
      path: '/PaginaCheckout',
      name: 'PaginaCheckout',
      component: PaginaCheckout
    },
    {
      path: '/PaginaPerfil',
      name: 'PaginaPerfil',
      component: PaginaPerfil
    }
  ]
})

export default router