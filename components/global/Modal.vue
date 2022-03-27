<template>
  <div
    class="modal"
    :class="{ '--active': modal.active }"
  >
    <div class="modal__content">
      <img
        class="modal__content__close absolute cursor-pointer"
        src="@/static/icons/close.png"
        alt="Cerrar"
        @click="changeModal(false)"
      >
      <div v-if="modal.active" class="flex relative">
        <div class="modal__content__image">
          <div class="profile relative overflow-hidden shadow-xl">
            <div class="profile__image absolute z-10" :style="{ backgroundImage: `url(` + require(`~/static/people/${modal.data.image}`) + `)` }"></div>
          </div>
        </div>
        <div class="modal__content__data">
          <p v-text="modal.data.name" class="text-2xl text-emerald font-bold"></p>
          <p v-text="modal.data.job" class="text-2xl font-bold mb-2"></p>
          <div class="text-sm" v-html="modal.data.info"></div>
        </div>
      </div>
    </div>
    <div class="modal__background"></div>
  </div>
</template>

<script>

export default {
  computed: {
    modal () {
      return this.$store.state.modal.modal
    }
  },
  methods: {
    changeModal (val) {
      this.$store.commit('modal/changeModal', val)
      setTimeout(() => {
        this.$store.commit('modal/clearModal')
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 100;
  position: fixed;
  pointer-events: none;
  translate: transform 300ms ease-in-out;

  &__content {
    z-index: 2;
    left: 0;
    right: 0;
    top: 50%;
    width: 80vw;
    margin: 0 auto;
    max-width: 1200px;
    position: absolute;
    border-radius: 10px;
    background: #fff;
    padding: 60px 50px 70px;
    transform: translateY(-50%);

    &__close {
      top: 20px;
      right: 20px;
      width: 34px;
      height: 34px;
    }

    &__image {
      width: 350px;
      margin-right: 60px;
    }
  }

  &__background {
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(0,0,0,0.4);
  }

  .profile {
    width: 260px;
    height: 350px;
    margin: 0 auto;
    display: inline-block;
    padding-bottom: 0;
  }

  &.--active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>