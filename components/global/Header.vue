<template>
<div
  class="header fixed z-50 transition-all bg-transparent duration-500"
  :class="{ 'bg-black': $route.name != 'index' || ($route.name == 'index' && scrollPosition > pivot)}"
>
  <div class="container mx-auto flex justify-end overflow-hidden">
    <ul class="flex w-full overflow-auto">
      <li
        v-for="(el, index) in nav" :key="index"
        class="ml-5 text-white"
      >
        <a v-if="el.pdf" :href="`/files/${el.link}`" v-text="el.label" target="_blank" class="hover:underline underline-offset-1 cursor-pointer"></a>
        <nuxt-link v-else :to="el.link" no-prefetch v-text="el.label" class="hover:underline underline-offset-1 cursor-pointer" exact></nuxt-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      nav: [
        {
          label: 'Inicio',
          link: '/',
          pdf: false
        },
        {
          label: 'Agenda',
          link: '/agenda',
          pdf: false
        },
        {
          label: 'Comité Organizador',
          link: '/comite-organizador',
          pdf: false
        },
        {
          label: 'Comité Arbitral',
          link: '/comite-arbitral',
          pdf: false
        },
        {
          label: 'Convocatoria',
          link: 'convocatoria.pdf',
          pdf: true
        },
        {
          label: 'Para el Autor',
          link: '/para-el-autor',
          pdf: false
        },
        {
          label: 'Contacto',
          link: '/contacto',
          pdf: false
        }
      ],
      scrollPosition: null,
      pivot: 0
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    const pivotEl = document.querySelector('.hero.relative')
    if(pivotEl) {
      this.pivot = pivotEl.clientHeight
    }
  }
}
</script>

<style lang="scss">
.header {
  top: 0;
  left: 0;
  right: 0;
  padding: 50px 0 40px;

  a:hover {
    color: #4bcfbb;
  }
}

.nuxt-link-active {
  color: #4bcfbb;
}
</style>
