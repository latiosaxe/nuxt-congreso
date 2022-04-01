export { default as Footer } from '../../components/global/Footer.vue'
export { default as Header } from '../../components/global/Header.vue'
export { default as Modal } from '../../components/global/Modal.vue'
export { default as ComiteProfile } from '../../components/comite/Profile.vue'
export { default as HomeBenefits } from '../../components/home/Benefits.vue'
export { default as HomeConvene } from '../../components/home/Convene.vue'
export { default as HomeGoals } from '../../components/home/Goals.vue'
export { default as HomeHero } from '../../components/home/Hero.vue'
export { default as HomeInterest } from '../../components/home/Interest.vue'
export { default as HomeSpeakers } from '../../components/home/Speakers.vue'
export { default as HomeTag } from '../../components/home/Tag.vue'

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
