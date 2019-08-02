import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: () => import('./views/CreateAccount.vue')
    },
    {
      path: '/depositar',
      name: 'depositar',
      component: () => import('./views/Depositar.vue')
    },
    {
      path: '/pagar',
      name: 'pagar',
      component: () => import('./views/Pagar.vue')
    },
    {
      path: '/transferir',
      name: '/trasnferir',
      component: () => import('./views/Transferir.vue')
    },
    {
      path: '/principal',
      name: 'Principal',
      component: () => import('./views/Principal.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
