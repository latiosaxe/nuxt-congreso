<template>
  <div class="home-speakers relative w-full overflow-hidden">
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
    />
    <div class="home-speakers__head text-center mb-4">
      <p class="text-emerald text-5xl font-bold mb-4">Conoce más</p>
      <p class="font-bold text-3xl">acerca del asombroso grupo de oradores que compartirán sus ideas y conocimientos.</p>
    </div>

    <div class="home-speakers__title relative">
      <div class="container relative z-10">
        <p class="home-speakers__title__label text-emerald text-6xl font-bold">Speakers<br/>Magistrales</p>
      </div>
      <p class="home-speakers__title__background absolute text-center text-white">Speakers</p>
    </div>

    <div class="home-speakers__slider relative">
      <div class="container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide carousel-wrapper__relative" v-for="(ppl, index) in speakers" :key="index" >
              <ComiteProfile :name="ppl.name" :image="ppl.image"  :info="ppl.info" :data="ppl.data" :speak="ppl.speak" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>

    <div class="home-speakers__title relative">
      <div class="container relative z-10">
        <p class="home-speakers__title__label text-emerald text-6xl font-bold">Talleristas<br/>Invitados</p>
      </div>
      <p class="home-speakers__title__background absolute text-center text-white">Talleristas</p>
    </div>

    <div class="container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <ComiteProfile v-for="(ppl, index) in workshop" :key="index" :name="ppl.name" :image="ppl.image" :speak="ppl.speak" :show-speak-always="true"/>
      </div>
    </div>

    <div class="home-speakers__cta text-center">
      <a href="/files/agenda.pdf" target="_blank" class="button --is-rounded">Ver Agenda</a>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      arrows: true,
      autoplay: true,
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      },
    })
  },
  data () {
    return {
      speakers: [
        {
          name: 'Ing. Gaby Carolina Muñoz Chará',
          image: 'gaby.png',
          info: true,
          speak: 'El poder de la Tecnología Colaborativa en la Movilidad',
          data: {
            job: 'Co – Fundadora y CEO de TAXIA LIFE',
            info: '<p class="mb-1">Colombia</p><p class="font-bold mb-5">"El poder de la Tecnología Colaborativa en la Movilidad"</p><p>Ingeniera electrónica y de telecomunicaciones, desde hace 12 años trabajando en la transformación tecnológica de transporte en Colombia, contribuyendo con el desarrollo tecnológico y con modelos de operación que han permitido tener cambios positivos en la industria del transporte, como CEO en TAXIA LIFE mi propósito de transformar la movilidad me ha comprometido con procesos de innovación y desarrollo empresarial, ejecutando proyectos de base tecnológica, pero con eminente corte social, emprendedora, empresaria, con un equipo de trabajo comprometido, empoderado y con alto nivel técnico pero con gran pasión por su labor. Actualmente trabajo en proyectos de movilidad urbana, ciudades digitales y seguridad ciudadana, en Taxia hemos logrado más de 55 millones de servicios y posicionarnos en 20 ciudades de Colombia, en Córdoba Argentina, Aruba y Panama, y en este momento abriendo operaciones en el norte de Mexico, también como empresa Andi del Futuro y Manizales Mas, ser parte de la red Wayra y SeedStars, además de ser ganadora en programas de emprendimiento como apps co, Colombia startup entre otros.</p>'
          }
        },
        {
          name: 'Mtro. Víctor Pagaza Melero',
          image: 'victor.png',
          info: true,
          speak: 'Reciclado de llantas, patentes, OD´S y economía circular',
          data: {
            job: 'Fundador y CEO de la empresa A3P IMPERLLANTA',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Reciclado de llantas, patentes, OD’S y economía circular"</p><p class="mb-2">Prestigiado ambientalista de Valle de Bravo, Estado de México, que comenzó un negocio familiar, en 1997 fund RAMSA dedicada al reciclaje de llantas, en el 2006 fue pionero para hacer impermeabilizante hecho a base de este reciclaje,en 2008 inició la empresa de recubrimientos ecológicos y reciclados fabricante del impermeabilizante A3P Imperllanta contando a la fecha con más de 500 distribuidores nacionales e internacionales en los Estado Unidos, planta de fabricación en Bolivia con exportación a 6 países.</p><p class="mb-2">En el 2008 le otorgaron el Premio Nacional de Ecología otorgado por la Fundación Miguel Alemán Valdez</p><p class="mb-2">Representante de los organismos internacionales Onward E IIDEL en México, </p>'
          }
        },
        {
          name: 'Dr. Antonio Alarcón Paredes',
          image: 'antonio.png',
          info: true,
          speak: 'El cómputo inteligente y sus aplicaciones',
          data: {
            job: 'Miembro de la Sociedad Mexicana de la Inteligencia Artificial y del Sistema Nacional de Investigadores.',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"El cómputo inteligente y sus aplicaciones"</p><p class="mb-2">Doctorado en Ciencias de la Computación, por el Centro de investigación en Computación del IPN, en México, en 2013 con su tésis sobre la Comprensión de imágenes mediante modelos asociativos alfa .beta. Maestría en Ciencias de Ingeniería de Cómputo, por el Centro de Investigación en Computación del IPN, México, en 2009, con su tésis: Redes neuronales alfa – beta sin pesos: condiciones suficientes para la recuperación de patrones Ingeniero en Sistemas Computacionales por la Universidad del Valle de Cuernavaca, en 2007.</p><p class="mb-2">Ha obtenido diversas distinciones como:</p><ol><li>Miembro del Sistema Nacional de Investigadores Nivel 1</li><li>Miembro de la Sociedad Mexicana de Inteligencia Artificial</li><li>Reconocimiento a Perfil Deseable PRODEP desde 2015, entre otras</li></ol>'
          }
        },
        {
          name: 'Dr. Edgardo Solís Carmona ',
          image: 'edgardo.png',
          info: false,
          speak: 'Innovar para ser competitivos en un mundo globalizado y monopolizado'
        },
        {
          name: 'Ing. José Ricardo Guadarrama Jiménez',
          image: 'jose.png',
          info: true,
          speak: 'Hackeando a las matemáticas',
          data: {
            job: 'CEO de Richie Systems',
            info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Hackeando las matemáticas"</p><p class="mb-2">Ingeniero en Sistemas Computacionales, CEO de Richie Systems</p><p class="mb-2">Especialista y asesor en medidas de protección en Ciberinteligencia, Ciberespionaje e Ingeniería Social, experto en técnicas de hacking y cracking Docente de tecnologías, robótica y ciencias exactas durante 9 años.</p><p class="mb-2">Actualmente maestrante de Tecnologías Educativas. Ha participado en varios proyectos como lo destacan en Google y en UNESCO, en los que ha perfeccionado sus conocimientos de Innovación tecnológica educativa. Destaca especialmente su proyecto llamado “Hackeando a las Matemáticas” impartido en comunidades rurales y diferentes países como Guatemala, Chile, Colombia y próximamente en Argentina. Uno de sus objetivos es formar profesionistas comprometidos con su entorno y ser ciudadanos éticos digitales.</p>'
          }
        },
        {
          name: 'Mtra. Cristina García',
          image: 'cristina.png',
          info: false,
          speak: 'Cómo Gestionar la Innovación dentro de la Organización'
        },
        {
          name: 'Mtro. Izhar Oswaldo Escudero Ornelas',
          image: 'izhar.png',
          info: false,
          speak: 'Machine Learning y Redes Neurales aplicadas en el aumento de la Productividad'
        },
        {
          name: 'Dra. Yanet Romero Arriaga',
          image: 'yanet.png',
          info: false,
          speak: 'Los retos actuales de los profesionistas en la pandemia'
        },
        {
          name: 'Dr. César Humberto Anchante Saravia',
          image: 'cesar.png',
          info: false,
          speak: 'Sistema de acuaponia orientada al desarrollo sostenible'
        }
      ],
      workshop: [
        {
          name: 'Dr. Tayde González Arias',
          image: 'tayde.png',
          speak: 'Derechos y Propiedad Intelectual'
        },
        {
          name: 'Mtro. Manuel Tovilla Espadas',
          image: 'manuel.png',
          speak: 'Métodos de Análisis de Estados Financieros'
        },
        {
          name: 'Mtro. Carlos Abraham Carballo Monsivais',
          image: 'carlos.png',
          speak: 'Implementando Aprendizaje Maquina en toma de decisiones del bitcoin'
        },
        {
          name: 'Mtra. Liliana Álvarez Arreola',
          image: 'liliana.png',
          speak: 'Deja para mañana, lo que no quieras hacer hoy'
        },
        {
          name: 'Mtro. Jesús Eduardo Lara Miranda',
          image: 'jesus.png',
          speak: 'Vamos a crecer en tiempos de crisis'
        },
        {
          name: 'Mtro. Aland Yarden Escudero Ornelas',
          image: 'aland.png',
          speak: 'La ciencia de datos en la Calidad y la Productividad'
        },
        {
          name: 'Ing. Sylvia Garcés Soria',
          image: 'sylvia.png',
          speak: 'Herramientas para abordar oportunidades, riesgos y desafíos en la cadena de suministros'
        },
        {
          name: 'Dr. Héctor Bourget Ontiveros',
          image: 'hector.png',
          speak: 'Modelos corporativos en la competitividad para emprendedores'
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
    max-width: 470px;
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
