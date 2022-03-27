<template>
  <div class="home-speakers relative w-full overflow-hidden">
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
    />
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
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide carousel-wrapper__relative" v-for="(ppl, index) in speakers" :key="index" >
            <ComiteProfile :name="ppl.name" :image="ppl.image"  :info="ppl.info" :data="ppl.data" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="home-speakers__title relative">
      <div class="container relative z-10">
        <p class="home-speakers__title__label text-emerald text-6xl font-bold">Talleristas<br/>Invitados</p>
      </div>
      <p class="home-speakers__title__background absolute text-center text-white">Talleristas</p>
    </div>

    <div class="container">
      <div class="grid grid-cols-4 gap-5">
        <ComiteProfile v-for="(ppl, index) in workshop" :key="index" :name="ppl.name" :image="ppl.image"/>
      </div>
    </div>

    <div class="home-speakers__cta text-center">
      <a href="https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=0" class="button --is-rounded --primary mr-4" _target="blank">Ver Agenda Virtual</a>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
          clickable: true,
      }
    })
  },
  data () {
    return {
      speakers: [
        {
          name: 'Gaby Carolina Muñoz Chará',
          image: 'gaby.png',
          info: true,
          data: {
            job: 'Co – Fundadora y CEO de TAXIA LIFE',
            info: '<p class="mb-1">Colombia</p><p class="font-bold mb-5">"El poder de la Tecnología Colaborativa en la Movilidad"</p><p>Ingeniera electrónica y de telecomunicaciones, desde hace 12 años trabajando en la transformación tecnológica de transporte en Colombia, contribuyendo con el desarrollo tecnológico y con modelos de operación que han permitido tener cambios positivos en la industria del transporte, como CEO en TAXIA LIFE mi propósito de transformar la movilidad me ha comprometido con procesos de innovación y desarrollo empresarial, ejecutando proyectos de base tecnológica, pero con eminente corte social, emprendedora, empresaria, con un equipo de trabajo comprometido, empoderado y con alto nivel técnico pero con gran pasión por su labor. Actualmente trabajo en proyectos de movilidad urbana, ciudades digitales y seguridad ciudadana, en Taxia hemos logrado más de 55 millones de servicios y posicionarnos en 20 ciudades de Colombia, en Córdoba Argentina, Aruba y Panama, y en este momento abriendo operaciones en el norte de Mexico, también como empresa Andi del Futuro y Manizales Mas, ser parte de la red Wayra y SeedStars, además de ser ganadora en programas de emprendimiento como apps co, Colombia startup entre otros.</p>'
          }
        },
        {
          name: 'Víctor Pagaza Melero',
          image: 'rene.png',
          info: true,
          data: {
            job: 'Fundador y CEO de la empresa A3P IMPERLLANTA',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Reciclado de llantas, patentes, OD’S y economía circular"</p><p class="mb-2">Prestigiado ambientalista de Valle de Bravo, Estado de México, que comenzó un negocio familiar, en 1997 fund RAMSA dedicada al reciclaje de llantas, en el 2006 fue pionero para hacer impermeabilizante hecho a base de este reciclaje,en 2008 inició la empresa de recubrimientos ecológicos y reciclados fabricante del impermeabilizante A3P Imperllanta contando a la fecha con más de 500 distribuidores nacionales e internacionales en los Estado Unidos, planta de fabricación en Bolivia con exportación a 6 países.</p><p class="mb-2">En el 2008 le otorgaron el Premio Nacional de Ecología otorgado por la Fundación Miguel Alemán Valdez</p><p class="mb-2">Representante de los organismos internacionales Onward E IIDEL en México, </p>'
          }
        },
        {
          name: 'Antonio Alarcón Paredes',
          image: 'antonio.png',
          info: true,
          data: {
            job: 'Miembro de la Sociedad Mexicana de la Inteligencia Artificial y del Sistema Nacional de Investigadores.',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"El cómputo inteligente y sus aplicaciones"</p><p class="mb-2">Doctorado en Ciencias de la Computación, por el Centro de investigación en Computación del IPN, en México, en 2013 con su tésis sobre la Comprensión de imágenes mediante modelos asociativos alfa .beta. Maestría en Ciencias de Ingeniería de Cómputo, por el Centro de Investigación en Computación del IPN, México, en 2009, con su tésis: Redes neuronales alfa – beta sin pesos: condiciones suficientes para la recuperación de patrones Ingeniero en Sistemas Computacionales por la Universidad del Valle de Cuernavaca, en 2007.</p><p class="mb-2">Ha obtenido diversas distinciones como:</p><ol><li>Miembro del Sistema Nacional de Investigadores Nivel 1</li><li>Miembro de la Sociedad Mexicana de Inteligencia Artificial</li><li>Reconocimiento a Perfil Deseable PRODEP desde 2015, entre otras</li></ol>'
          }
        },
        {
          name: 'José Ricardo Guadarrama Jiménez',
          image: 'jose.png',
          info: true,
          data: {
            job: 'CEO de Richie Systems',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Hackeando las matemáticas"</p><p class="mb-2">Ingeniero en Sistemas Computacionales, CEO de Richie Systems</p><p class="mb-2">Especialista y asesor en medidas de protección en Ciberinteligencia, Ciberespionaje e Ingeniería Social, experto en técnicas de hacking y cracking Docente de tecnologías, robótica y ciencias exactas durante 9 años.</p><p class="mb-2">Actualmente maestrante de Tecnologías Educativas. Ha participado en varios proyectos como lo destacan en Google y en UNESCO, en los que ha perfeccionado sus conocimientos de Innovación tecnológica educativa. Destaca especialmente su proyecto llamado “Hackeando a las Matemáticas” impartido en comunidades rurales y diferentes países como Guatemala, Chile, Colombia y próximamente en Argentina. Uno de sus objetivos es formar profesionistas comprometidos con su entorno y ser ciudadanos éticos digitales.</p>'
          }
        },
        {
          name: 'Edgardo Solís Carmona ',
          image: 'edgardo.png',
          info: false
        },
        {
          name: 'Cristina García',
          image: 'cristina.png',
          info: false
        },
        {
          name: 'Izhar Oswaldo Escudero Ornelas',
          image: 'sandra.png',
          info: false
        },
        {
          name: 'Yanet Romero Arriaga ',
          image: 'juan.png',
          info: false
        },
        {
          name: 'César Humberto Anchante Saravia',
          image: 'sandra.png',
          info: false
        }
      ],
      workshop: [
        {
          name: 'Dr. Tayde González Arias',
          image: 'tayde.png'
        },
        {
          name: 'Manuel Tovilla Espadas ',
          image: 'manuel.png'
        },
        {
          name: 'Carlos Abraham Carballo Monsivais',
          image: 'carlos.png'
        },
        {
          name: 'Liliana Álvarez Arreola',
          image: 'liliana.png'
        },
        {
          name: 'Jesús Eduardo Lara Miranda',
          image: 'jesus.png'
        },
        {
          name: 'Aland Yarden Escudero Ornelas',
          image: 'aland.png'
        },
        {
          name: 'Sylvia Garcés Soria',
          image: 'sylvia.png'
        },
        {
          name: 'Héctor Bourget Ontiveros',
          image: 'hector.png'
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
