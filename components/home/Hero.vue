<template>
  <div class="hero relative">
    <div class="container text-white flex">
      <div class="hero__content relative" data-aos="fade-up" data-aos-duration="900">
        <h2 class="text-4xl md:text-8xl">Bienvenido</h2>
        <p class="text-xl font-thin mb-10">
          al 1er. Congreso Internacional sobre Tecnología, Innovación, Calidad y Productividad para el Desarrollo Económico de las Naciones.
        </p>
        <p class="hero__content__small text-xl font-thin mb-8">
          <span class="font-bold">16, 17 y 18</span> de Mayo de 2022, en modalidad virtual.
        </p>

        <div class="flex">
          <a class="button --is-rounded --primary mr-4" href="https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform" target="_blank">Inscribirme</a>
          <nuxt-link class="button --is-rounded" to="/agenda">Ver Agenda</nuxt-link>
        </div>
      </div>
    </div>
    <div class="hero__bg absolute" />
  </div>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<style lang="scss">
.hero {
  height: 100vh;
  max-height: 875px;

  &__content {
    z-index: 2;
    max-width: 490px;
    padding: 240px 0 100px;

    &__small {
      max-width: 270px;
    }
  }

  &__bg {
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('~/static/hero-bg.jpg') center center no-repeat;
    background-size: cover;
  }
}

</style>