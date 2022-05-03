export const Footer = () => import('../../components/global/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/global/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../../components/global/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const ComiteProfile = () => import('../../components/comite/Profile.vue' /* webpackChunkName: "components/comite-profile" */).then(c => wrapFunctional(c.default || c))
export const HomeBenefits = () => import('../../components/home/Benefits.vue' /* webpackChunkName: "components/home-benefits" */).then(c => wrapFunctional(c.default || c))
export const HomeConvene = () => import('../../components/home/Convene.vue' /* webpackChunkName: "components/home-convene" */).then(c => wrapFunctional(c.default || c))
export const HomeGoals = () => import('../../components/home/Goals.vue' /* webpackChunkName: "components/home-goals" */).then(c => wrapFunctional(c.default || c))
export const HomeHero = () => import('../../components/home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const HomeInterest = () => import('../../components/home/Interest.vue' /* webpackChunkName: "components/home-interest" */).then(c => wrapFunctional(c.default || c))
export const HomeSpeakers = () => import('../../components/home/Speakers.vue' /* webpackChunkName: "components/home-speakers" */).then(c => wrapFunctional(c.default || c))
export const HomeTag = () => import('../../components/home/Tag.vue' /* webpackChunkName: "components/home-tag" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
