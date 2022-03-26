<template>
  <div class="profile relative overflow-hidden">
    <div class="profile__label absolute z-20 flex items-center">
      <p class="text-sm text-white" v-text="name"></p>
    </div>
    <div class="profile__image absolute z-10" :style="{ backgroundImage: `url(` + require(`~/static/people/${this.image}`) + `)` }"></div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['image', 'name']
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