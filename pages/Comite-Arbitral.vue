<template>
  <div class="no-home-section bg-light-blue">
    <div class="container">
      <h2 class="text-6xl font-bold text-emerald mb-10">Comité Arbitral</h2>
      <div class="grid grid-cols-3 gap-4 relative">
        <div
          v-for="(single, index) in data" :key="index"
          class="bg-white single-card"
        >
          <div class="single-card__row">
            <div class="flex flex-start items-center">
              <div class="single-card__row__icon flex justify-center">
                <img src="@/static/icons/school.png" :alt="single.name" class="mr-4">
              </div>
              <span v-text="single.name" class="font-bold leading-5"></span>
            </div>
          </div>
          <div class="single-card__row">
            <div class="flex flex-start items-center">
              <div class="single-card__row__icon flex justify-center">
                <img src="@/static/icons/school-2.png" :alt="single.place" class="mr-4">
              </div>
              <span v-text="single.place" class=""></span>
            </div>
          </div>
          <div class="single-card__row">
            <div class="flex flex-start items-center">
              <div class="single-card__row__icon flex justify-center">
                <img src="@/static/icons/email.png" :alt="single.place" class="mr-4">
              </div>
              <a :href="`mailto:${single.email}`" class="text-sm text-emerald" v-text="single.email"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComiteArbitral',
  data () {
    return {
      data: [
        {
          name: 'Ana Elizabeth Maruri Montes de Oca - Doctora',
          place: 'Tecnológico Universitario Toluca',
          email: 'anamaruri.m@gmail.com'
        },{
          name: 'Carlos Rodrigo Vázquez Valdés - Maestro',
          place: 'Tecnológico Universitario Toluca',
          email: 'chino-m-1@hotmail.com'
        },{
          name: 'Francisco Javier González Raya - Maestro',
          place: 'Tecnológico Universitario Toluca',
          email: 'diraf_glez@yahoo.com.mx'
        },{
          name: 'Irma Bedolla Solano - Maestra',
          place: 'Instituto Tecnológico de Acapulco',
          email: 'ir_m_a@hotmail.com'
        },{
          name: 'Jazmín Georgina Licona Olmos - Doctora',
          place: 'Instituto Tecnológico de Pachuca',
          email: 'jazmin.lo@pachuca.tecnm.mx '
        },{
          name: 'Juan Pablo Díaz Moreno - Maestro',
          place: 'Instituto Tecnológico de Acapulco',
          email: 'mxdiazjuan@gmail.com'
        },{
          name: 'Juan José Bedolla Solano - Doctor',
          place: 'Instituto Tecnológico de Acapulco',
          email: 'juan.bs@acapulco.tecnm.mx'
        },{
          name: 'Katya Lorena Avilés Coyoli - Doctora',
          place: 'Instituto Tecnológico de Pachuca',
          email: 'katia.ac@pachuca.tecnm.mx'
        },{
          name: 'Luis Alberto Quiroz Granados - Maestro',
          place: 'Instituto Tecnológico de Zitácuaro',
          email: 'luis.qg@zitacuaro.tecnm.mx'
        },{
          name: 'Lorenzo Sánchez Vásquez - Doctor',
          place: 'Federación Global de Profesiones',
          email: 'lorenzo.san.vas@gmail.com'
        },{
          name: 'María Cristina González García - Maestra',
          place: 'Instituto Tecnológico de Zitácuaro',
          email: 'maria.gg@zitacuaro.tecnm.mx'
        },{
          name: 'María del Carmen Hernández Códova -Maestra',
          place: 'Tecnológico Universitario Toluca',
          email: 'tutcoordinacionacademica@gmail.com'
        },{
          name: 'Norma López Pérez - Maestra',
          place: 'Instituto Tecnológico de Pachuca',
          email: 'norma.lp@pachuca.tecnm.mx'
        },{
          name: 'René Edmundo Cuevas Valencia -Doctor',
          place: 'Universidad Autónoma de Guerrero',
          email: 'reneecuevas@uagro.mx'
        },{
          name: 'René Vázquez Jiménez - Doctor',
          place: 'Universidad Autónoma de Guerrero',
          email: 'rvazquez@uagro.mx'
        },{
          name: 'Rocío Nayelly Ramos Bernal - Doctora',
          place: 'Universidad Autónoma de Guerrero',
          email: ''
        },{
          name: 'Silvestre Bedolla Solano - Maestro',
          place: 'Instituto Tecnológico de Acapulco',
          email: 'debollass@yahoo.com.mx'
        },{
          name: 'Victoria Amaya Escamilla - Maestra',
          place: 'Tecnológico Universitario Toluca',
          email: 'tutcoordinacionacademica@gmail.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.single-card {
  padding: 20px;
  border-radius: 5px;

  &__row {
    margin-bottom: 10px;

    &__icon {
      width: 60px;
      min-width: 60px;

      img {
        height: 18px;
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
