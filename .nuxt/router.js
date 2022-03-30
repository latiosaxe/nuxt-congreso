import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e0fe078 = () => interopDefault(import('../pages/Agenda.vue' /* webpackChunkName: "pages/Agenda" */))
const _01e18114 = () => interopDefault(import('../pages/Aviso-De-Privacidad.vue' /* webpackChunkName: "pages/Aviso-De-Privacidad" */))
const _28c4e84d = () => interopDefault(import('../pages/Comite-Arbitral.vue' /* webpackChunkName: "pages/Comite-Arbitral" */))
const _88769ae8 = () => interopDefault(import('../pages/Comite-Organizador.vue' /* webpackChunkName: "pages/Comite-Organizador" */))
const _59f59af2 = () => interopDefault(import('../pages/Contacto.vue' /* webpackChunkName: "pages/Contacto" */))
const _679d21c2 = () => interopDefault(import('../pages/Para-El-Autor.vue' /* webpackChunkName: "pages/Para-El-Autor" */))
const _fa77112c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Agenda",
    component: _7e0fe078,
    name: "Agenda"
  }, {
    path: "/Aviso-De-Privacidad",
    component: _01e18114,
    name: "Aviso-De-Privacidad"
  }, {
    path: "/Comite-Arbitral",
    component: _28c4e84d,
    name: "Comite-Arbitral"
  }, {
    path: "/Comite-Organizador",
    component: _88769ae8,
    name: "Comite-Organizador"
  }, {
    path: "/Contacto",
    component: _59f59af2,
    name: "Contacto"
  }, {
    path: "/Para-El-Autor",
    component: _679d21c2,
    name: "Para-El-Autor"
  }, {
    path: "/",
    component: _fa77112c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
