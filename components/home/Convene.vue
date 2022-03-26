<template>
  <div class="home-convene relative overflow-hidden bg-light-blue">
    <div class="container">
      <div class="home-convene__content grid grid-cols-2 relative">
        <div class="self-center home-convene__text">
          <h3 class="text-emerald text-4xl font-bold mb-2">Convocan</h3>
          <p>
            A la comunidad estudiantil, a los especialistas en Innovación,
            <span class="font-bold">Tecnología, Economía, Calidad y Productividad</span>; a todas las
            personas que laboran en empresas privadas, Oficinas de Gobierno, órganos no gubernamentales, Instituciones Públicas y a quienes
            realizan investigación científica que estén interesadas en aportar
            en el desarrollo económico de la Nación, a participar.
          </p>
        </div>
        <div class="bg-dark-grey home-convene__image">
          <img src="@/static/home-convene.png" alt="Convocan" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.home-convene {
  margin-bottom: 80px;

  &__content {
    z-index: 2;
  }

  &__text {
    padding-right: 80px;
  }

  &__image {
    img {
      transform: translateX(-100px);
    }
  }

  &:before {
    content: '';
    top: 0;
    left: 50%;
    bottom: 0;
    z-index: 1;
    right: -50%;
    position: absolute;
    background: #2b2b2b;
  }
}
</style>
