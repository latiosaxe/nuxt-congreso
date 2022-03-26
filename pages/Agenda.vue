<template>
  <div class="no-home-section bg-light-blue agenda">
    <div class="container">
      <div class="grid grid-cols-10 gap-20 relative">
        <div class="agenda__image relative col-span-4">
          <img src="@/static/agenda.png" alt="Agenda">
        </div>
        <div class="agenda__content col-span-6">
          <h2 class="text-emerald text-6xl font-bold mb-8">Agenda</h2>
          <p class="text-emerald text-xl mb-4">¡Una experiencia de aprendizaje como ninguna otra!</p>
          <p class="mb-4">Descubre todas las actividades que tendremos, consulta los días y horarios para que no te lo pierdas.</p>
          <div class="flex mb-4">
            <div
              v-for="(tab, index) in tabs" :key="index" v-text="tab.label"
              class="button --is-rounded  --nano mr-2 "
              :class="[ index == currentTab ? ' --primary shadow-2xl' : '--white' ]"
              @click="currentTab = index"
            ></div>
          </div>
          <div class="agenda__grid bg-white mb-10">
            <template v-if="currentTab == 0">
              <iframe
                width="500" height="500" frameborder="0" scrolling="no"
                src="https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit?usp=sharing&rm=minimal"
              />
              <!-- <div class="agenda__grid__row">
                <p class="text-emerald text-lg mb-2">05/06/2022</p>
                <p><span class="agenda__grid__row__hour">09:00 - 10:00</span><span class="font-bold">Conferencia 01</span></p>
                <p><span class="agenda__grid__row__hour">10:00 - 11:00</span><span class="font-bold">Conferencia 02</span></p>
                <p><span class="agenda__grid__row__hour">11:00 - 12:00</span><span class="font-bold">Conferencia 03</span></p>
              </div>
              <div class="agenda__grid__row">
                <p class="text-emerald text-lg mb-2">05/06/2022</p>
                <p><span class="agenda__grid__row__hour">09:00 - 10:00</span><span class="font-bold">Conferencia 01</span></p>
                <p><span class="agenda__grid__row__hour">10:00 - 11:00</span><span class="font-bold">Conferencia 02</span></p>
                <p><span class="agenda__grid__row__hour">11:00 - 12:00</span><span class="font-bold">Conferencia 03</span></p>
              </div> -->
            </template>
            <template v-if="currentTab == 1">
              <iframe
                width="500" height="500" frameborder="0" scrolling="no"
                src="https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=1861318082?usp=sharing&rm=minimal"
              />
            </template>
            <template v-if="currentTab == 2">
              <iframe
                width="500" height="500" frameborder="0" scrolling="no"
                src="https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=64163190?usp=sharing&rm=minimal"
              />
            </template>
          </div>
          <div>
            <nuxt-link class="button --is-rounded mr-2 --primary" to="/" no-prefetch>Inscribirme</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
  data () {
    return {
      currentTab: 0,
      tabs: [
        {
          label: 'Conferencias Magistrales'
        },
        {
          label: 'Talleres'
        },
        {
          label: 'Ponencias'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.agenda {
  &__image {
    img {
      width: 100%;
      display: block;
      transform: translateX(90px);
    }

    &:before {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: -50%;
      position: absolute;
      background: #2b2b2b;
    }
  }
}

.agenda__grid {
  padding: 14px 10px;
  border-radius: 10px;

  iframe {
    width: 100%;
  }

  &__row {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000;

    &__hour {
      width: 200px;
      margin-bottom: 5px;
      display: inline-block;
    }
  }
}
</style>
