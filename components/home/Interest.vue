<template>
  <div class="home-interest relative overflow-hidden bg-light-blue">
    <div class="container">
      <div class="home-interest__content md:grid grid-cols-2 relative">
        <div class="bg-dark-grey home-interest__image">
          <img src="@/static/hero-interest.png" alt="Convocan" data-aos="fade-left" data-aos-delay="300" data-aos-duration="900"/>
        </div>
        <div class="self-center home-interest__text">
          <h3 class="text-emerald text-4xl font-bold mb-4">¿Estás interesado?</h3>
          <p class="mb-4 text-sm">Regístrate o revisa la convocatoria completa aquí.</p>
          <div class="flex items-center justify-center mb-4">
            <a class="button --is-rounded --primary --compact mr-4" href="https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform">Asistiré</a>
            <a class="button --is-rounded --white --compact" href="/files/convocatoria.pdf" target="_blank">Ver convocatoria</a>
          </div>
          <p class="mb-4 text-sm">
            Los trabajos presentados deberán estar orientados en la temática del Congreso y tienen fecha límite de recepción del <span class="font-bold">20 de abril de 2022</span>.
          </p>
          <div class="flex items-center justify-center mb-4">
            <a class="flex items-center justify-center button --is-rounded --white --compact" href="https://docs.google.com/forms/d/e/1FAIpQLScGjECb8iSAQfuqFCPRVGZCGsEdeSLhqtQmF0mlCqa0BzUCtg/viewform">
              <img src="@/static/icons//icon-document.png" alt="Registra tu trabajo">
              Registra tu trabajo
            </a>
          </div>
          <p class="text-emerald text-sm">
            ¡Gracias por ser parte de este gran acontecimiento y por construir juntos el futuro de la Nación!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.home-interest {
  margin-bottom: 80px;

  &__content {
    z-index: 2;
  }

  &__text {
    padding-left: 80px;
  }

  &__image {
    img {
      transform: translateX(100px);
    }
  }

  &:before {
    content: '';
    @media (min-width: 768px) {
      top: 0;
      left: -50%;
      bottom: 0;
      z-index: 1;
      right: 50%;
      position: absolute;
      background: #2b2b2b;
    }
  }
}
</style>
