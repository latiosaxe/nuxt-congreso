<template>
  <div class="no-home-section bg-light-blue agenda">
    <div class="container">
      <h2 class="text-6xl font-bold text-emerald mb-4">Comité<br/>Organizador</h2>
      <p class="text-2xl">Conoce a las personas que lo hicieron posible</p>
      <div class="organizer mt-10">
        <div class="flex organizer__grid">
          <div class="grid grid-cols-3 gap-6 w-8/12 self-center">
            <ComiteProfile v-for="(ppl, index) in uag" :key="index" :name="ppl.name" :image="ppl.image" />
          </div>
          <div class="w-4/12 organizer__logos self-center">
            <div class="organizer__logos__padding flex justify-end flex-col items-start">
              <img src="@/static/uag-logo.png" alt="Universidad Autónoma de Guerrero" class="mb-4">
              <p class="text-sm mb-6">Universidad Autónoma de Guerrero</p>
              <p>
                <a class="button --is-rounded --primary" href="http://posgradoingenieria.uagro.mx/" _target="blank">Visítanos</a>
              </p>
            </div>
          </div>
        </div>

        <div class="flex organizer__grid">
          <div class="grid grid-cols-3 gap-6 w-8/12 self-center">
            <ComiteProfile v-for="(ppl, index) in tut" :key="index" :name="ppl.name" :image="ppl.image" />
          </div>
          <div class="w-4/12 organizer__logos self-center">
            <div class="organizer__logos__padding flex justify-end flex-col items-start">
              <img src="@/static/tut.png" alt="Tecnológico Universitario Toluca" class="mb-4">
              <p class="text-sm mb-6">Tecnológico Universitario Toluca</p>
              <p>
                <a class="button --is-rounded --primary" href="https://www.facebook.com/TecTolucaOficial" _target="blank">Visítanos</a>
              </p>
            </div>
          </div>
        </div>

        <div class="flex organizer__grid">
          <div class="grid grid-cols-3 gap-6 w-8/12 self-center">
            <ComiteProfile v-for="(ppl, index) in fgdp" :key="index" :name="ppl.name" :image="ppl.image" />
          </div>
          <div class="w-4/12 organizer__logos self-center">
            <div class="organizer__logos__padding flex justify-end flex-col items-start">
              <img src="@/static/fgdp-color.png" alt="Federación Global de Profesiones A.C." class="mb-4">
              <p class="text-sm mb-6">Federación Global de Profesiones A.C.</p>
              <p>
                <a class="button --is-rounded --primary" href="https://www.federacionglobal.com/" _target="blank">Visítanos</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComiteOrganizador',
  data () {
    return {
      uag: [
        {
          name: 'Dra. Rocío Nayelly Ramos Bernal',
          image: 'rocio.png'
        },
        {
          name: 'Dr. René Vázquez Jiménez',
          image: 'rene.png'
        },
        {
          name: 'Dr. René E. Cuevas Valencia',
          image: 'rene-2.png'
        },
        
      ],
      tut: [
        {
          name: 'Mtra. Victoria Amaya Escamilla',
          image: 'victoria.png'
        },
        {
          name: 'Mtra. María del Carmen Hernández Códova',
          image: 'maria.png'
        }
      ],
      fgdp: [
        {
          name: 'Mtra Norma López Pérez',
          image: 'norma.png'
        },
        {
          name: 'Lic. Sandra Patricia Vázquez Hernández',
          image: 'sandra.png'
        },
        {
          name: 'Mtro. Juan Pablo Díaz Moreno',
          image: 'juan.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.organizer {
  &__logos {
    &__padding {
      padding-left: 80px;
    }

    img {
      width: auto;
      height: 90px;
      display: block;
    }
  }
}
</style>
