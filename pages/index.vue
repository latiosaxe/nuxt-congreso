<template>
  <div>
    <HomeHero />
    <HomeTag />
    <HomeConvene />
    <HomeGoals />
    <HomeBenefits />
    <HomeSpeakers />
    <HomeInterest />
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'IndexPage',
  head: {
    title: 'Congreso | Inicio',
    script: [
      { hid: 'stripe', src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js', defer: true }
    ],
    link: [{ rel:"stylesheet", type:"text/css", href:'https://unpkg.com/swiper@8/swiper-bundle.min.css' }]
  }
}
</script>
