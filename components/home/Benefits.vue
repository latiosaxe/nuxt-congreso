<template>
  <div class="home-benefits container">
    <p class="text-3xl text-center font-bold text-emerald mb-16">
      Al participar en este evento serás parte de:
    </p>

    <div class="md:grid grid-cols-3 gap-20 relative">
      <div class="home-benefits__element flex justify-center items-center flex-col" data-aos="fade-up" data-aos-duration="900">
        <img class="mb-6" src="@/static/icons/icon-1.png" alt="Icon 1">
        <div class="mb-3 flex text-emerald font-bold items-center">
          <div class="mr-2 text-6xl">9</div>
          <div class="leading-6 text-xl">
            <p>Conferencias<br/>Magistrales,</p>
          </div>
        </div>
        <p class="text-center">
          con profesionales de la más alta especialidad de distintas industrias y países.
        </p>
      </div>
      <div class="home-benefits__element flex justify-center items-center flex-col" data-aos="fade-up" data-aos-delay="300" data-aos-duration="900">
        <img class="mb-6" src="@/static/icons/icon-2.png" alt="Icon 2">
        <div class="mb-3 flex text-emerald font-bold items-center">
          <div class="mr-2 text-6xl">8</div>
          <div class="leading-6 text-xl">
            <p>Talleres con distintas<br/>personalidades,</p>
          </div>
        </div>
        <p class="text-center">
          con profesionales de la más alta especialidad de distintas industrias y países.
        </p>
      </div>
      <div class="home-benefits__element flex justify-center items-center flex-col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
        <img class="mb-6" src="@/static/icons/icon-3.png" alt="Icon 3">
        <div class="mb-3 flex text-emerald font-bold items-center leading-6 text-xl text-center">
          <p>Presentación de trabajos de investigación científica </p>
        </div>
        <p class="text-center">
          con profesionales de la más alta especialidad de distintas industrias y países.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-benefits {
  padding: 50px 0;

  &__element {
    img {
      width: 150px;
    }
  }
}
</style>