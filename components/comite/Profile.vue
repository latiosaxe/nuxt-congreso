<template>
  <div class="profile relative overflow-hidden">
    <div
      class="profile__label absolute z-20 flex flex-col items-center justify-center"
      :class="{ '--with-info': info }"
    >
      <p class="text-sm text-white w-full text-left" v-text="name"></p>
      <button
        v-if="info"
        class="profile__label__info button --is-rounded --primary --nano-2 mt-2"
        @click="changeModal(true)"
      >Ver más ></button>
    </div>
    <div class="profile__image absolute z-10" :style="{ backgroundImage: `url(` + require(`~/static/people/${this.image}`) + `)` }"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Profile',
  props: ['image', 'name', 'info', 'data'],
  methods: {
    changeModal (val) {
      this.$store.commit('modal/changeModal', val)
      console.log('DATA', this.data)
      const data = {
        name: this.name,
        job: this.data.job,
        image: this.image,
        info: this.data.info
      }
      console.log('data', data)
      this.$store.commit('modal/fillModal', data)
    }
  }
}
</script>

<style lang="scss">
  .profile {
    width: 100%;
    border-radius: 15px;
    padding-bottom: 130%;
    margin-bottom: 60px;
    background: url('~/static/profile-pic.png') center center no-repeat;

    &__label {
      left: 0;
      bottom: 0;
      right: 20px;
      height: 60px;
      padding: 10px 20px;
      border-radius: 5px;
      background: #2b2b2b;

      &__info {
        display: none;
      }
    }

    &__image {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: center center no-repeat;
      background-size: cover;
    }
  }
</style>