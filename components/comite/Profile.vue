<template>
  <div class="profile relative overflow-hidden">
    <!-- <div v-if="speak" v-text="speak" class="single-speak"></div> -->
    <div
      class="profile__label absolute z-20 flex flex-col items-center justify-center"
      :class="{ '--with-info': info, '--show-always-speak': showSpeakAlways }"
    >
      <p class="text-sm text-white w-full text-left profile-name" v-text="name"></p>
      <p v-if="speak || showSpeakAlways" class="text-xs text-white w-full text-left speak-name" v-text="speak"></p>
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
  props: ['image', 'name', 'info', 'data', 'speak', 'showSpeakAlways'],
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
  .speak-name {
    padding: 5px 5px;
    display: none;
  }

  .profile__label.--show-always-speak {
    min-height: 120px;

    .speak-name {
      display: block;
      color: #4bcfbb;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .single-speak {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 10000;
    opacity: 0;
    padding: 5px;
    color: white;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    transition: opacity 300ms ease-in-out;
  }

  .profile {
    width: 100%;
    border-radius: 15px;
    padding-bottom: 130%;
    margin-bottom: 60px;
    background: url('~/static/profile-pic.png') center center no-repeat;

    &__label {
      left: 0;
      right: 0;
      bottom: 0;
      min-height: 60px;
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

    &:hover {
      .single-speak {
        opacity: 1;
      }
    }
  }
</style>