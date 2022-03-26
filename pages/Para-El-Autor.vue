<template>
  <div class="no-home-section bg-light-blue --no-padding-bottom">
    <div class="bg-light-blue">
      <div class="home-convene relative overflow-hidden bg-light-blue">
        <div class="container">
          <div class="home-convene__content grid grid-cols-2 relative">
            <div class="self-center home-convene__text">
              <h3 class="text-emerald text-4xl font-bold mb-6">Para el Autor</h3>
              <p class="mb-6">
                Querido lector, gracias por tu interés en seguir
                compartiendo conocimiento e impulsando a las nuevas generaciones a seguir investigando, tu aportación
                contribuye al desarrollo económico de nuestro país y del mundo.
              </p>
              <p class="mb-6">
                Aquí encontrarás un consolidado de todos los temas de
                interés para que puedas participar en nuestras actividades y si es tu deseo, atender la Convocatoria para registrar tu trabajo en el
                <span class="font-bold">1er. Congreso Internacional sobre
                Tecnología, Innovación, Calidad y Productividad para
                el Desarrollo Económico de las Naciones.</span>
              </p>
              <p>
                Recuerda que, <span class="font-bold">“el éxito es algo futuro que necesita de tu
                esfuerzo presente”</span>
              </p>
            </div>
            <div class="bg-dark-grey home-convene__image">
              <img src="@/static/autor.png" alt="Para el Autor" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white author-files">
      <div class="container">
        <div class="grid grid-cols-6 gap-10 relative py-20">
          <div v-for="(single, index) in files" :key="index" class="text-center">
            <a :href="single.pdf ? `/files/${single.file}` : single.file" target="_blank" class="w-full flex justify-center items-center flex-col">
              <img :src="require(`@/static/icons/${single.icon}`)" :alt="single.text" class="author-files__icon mb-2">
              <p class="text-xs underline underline-offset-1" v-text="single.text"></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ParaElAutor',
  data () {
    return {
      files: [
        {
          icon: 'download-1.png',
          pdf: true,
          file: 'convocatoria.pdf',
          text: 'Revisar Convocatoria'
        },
        {
          icon: 'download-2.png',
          pdf: false,
          file: 'https://docs.google.com/forms/d/e/1FAIpQLScGjECb8iSAQfuqFCPRVGZCGsEdeSLhqtQmF0mlCqa0BzUCtg/viewform',
          text: 'Para registrar tu artículo'
        },
        {
          icon: 'download-3.png',
          pdf: true,
          file: 'guia-registrar.pdf',
          text: 'Líneamientos artículo'
        },
        {
          icon: 'download-4.png',
          pdf: false,
          file: 'https://docs.google.com/document/d/1hoX1ICp8lylH1e8c6aUINLCqUVQbJPre/edit',
          text: 'Plantilla artículo'
        },
        {
          icon: 'download-5.png',
          pdf: false,
          file: 'https://docs.google.com/document/d/1jd4HE1Hq5NowpBIVi_b6iuopEawiVLbn/edit',
          text: 'Carta Autorización'
        },
        {
          icon: 'download-6.png',
          pdf: true,
          file: 'tabla_costos.pdf',
          text: 'Costos'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.author-files {
  &__icon {
    width: auto;
    height: 80px;
  }
}
</style>
