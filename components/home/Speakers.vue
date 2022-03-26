<template>
  <div class="home-speakers relative w-full overflow-hidden">
    <div class="home-speakers__head text-center mb-4">
      <p class="text-emerald text-5xl font-bold">Conoce más</p>
      <p class="font-bold text-lg">acerca del asombroso grupo de oradores que compartirán sus ideas y conocimientos.</p>
    </div>

    <div class="home-speakers__title relative">
      <div class="container relative z-10">
        <p class="home-speakers__title__label text-emerald text-6xl font-bold">Speakers<br/>Magistrales</p>
      </div>
      <p class="home-speakers__title__background absolute text-center text-white">Speakers</p>
    </div>

    <div class="home-speakers__slider relative">
      <div class="carousel-wrapper">
        <div class="carousel-wrapper__relative" v-for="(ppl, index) in speakers" :key="index" >
          <ComiteProfile :name="ppl.name" :image="ppl.image" />
        </div>
      </div>
    </div>

    <div class="home-speakers__title relative">
      <div class="container relative z-10">
        <p class="home-speakers__title__label text-emerald text-6xl font-bold">Talleristas<br/>Invitados</p>
      </div>
      <p class="home-speakers__title__background absolute text-center text-white">Talleristas</p>
    </div>

    <div class="home-speakers__slider relative">
      <div class="carousel-wrapper">
        <div class="carousel-wrapper__relative" v-for="(ppl, index) in speakers" :key="index" >
          <ComiteProfile :name="ppl.name" :image="ppl.image" />
        </div>
      </div>
    </div>

    <div class="home-speakers__cta text-center">
      <a href="https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=0" class="button --is-rounded --primary mr-4" _target="blank">Ver Agenda Virtual</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      speakers: [
        {
          name: 'Gaby Carolina Muñoz Chará',
          image: 'rocio.png'
        },
        {
          name: 'Víctor Pagaza Melero',
          image: 'rene.png'
        },
        {
          name: 'Antonio Alarcón Paredes',
          image: 'rene-2.png'
        },
        {
          name: 'Edgardo Solís Carmona ',
          image: 'victoria.png'
        },
        {
          name: 'José Ricardo Guadarrama Jiménez',
          image: 'maria.png'
        },
        {
          name: 'Cristina García',
          image: 'norma.png'
        },
        {
          name: 'Izhar Oswaldo Escudero Ornelas',
          image: 'sandra.png'
        },
        {
          name: 'Yanet Romero Arriaga ',
          image: 'juan.png'
        },
        {
          name: 'César Humberto Anchante Saravia',
          image: 'sandra.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.home-speakers {
  padding: 50px 0;

  &__head {
    margin-left: auto;
    margin-right: auto;
    max-width: 420px;
  }

  &__title {
    padding: 100px 0 220px;

    &__background {
      z-index: 1;
      left: 0;
      right: 0;
      top: 50%;
      text-shadow: 0 0 1px #4bcfbb,
                  -1px -1px 1px #4bcfbb,
                  1px 1px 1px #4bcfbb,
                  -1px 1px 1px #4bcfbb,
                  1px -1px 1px #4bcfbb;
      transform: translateY(-46%);
      font-size: 20vw;
    }
  }

  &__cta {
    padding: 50px 0;
  }
}
</style>
