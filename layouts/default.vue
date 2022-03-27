<template>
  <div class="website">
    <Header />
    <Nuxt />
    <Footer />
    <Modal />
  </div>
</template>

<script>
import aos from '~/mixins/aos.js'

export default {
  mixins:[aos]
}
</script>