
<template>
<div class="footer bg-dark-grey text-white">
  <div class="container">
    <div class="footer__institutes md:flex items-center justify-between w-full mb-10">
      <img src="@/static/footer/tecnologico-toluca.png" alt="tecnologico-toluca">
      <img src="@/static/footer/fgdp.png" alt="fgdp">
      <img src="@/static/footer/feglinin.png" alt="FEGLININ">
      <img src="@/static/footer/miidt.png" alt="miidt">
    </div>
    <p class="font-bold mb-2">Síguenos</p>
    <div class="flex flex-start flex-wrap">
      <div v-for="(company, index) in social" :key="index" class="mr-20">
        <p class="text-sm mb-2" v-text="company.label"></p>
        <ul class="flex">
          <li v-for="(el, index2) in company.links" :key="index2" class="mr-2">
            <a :href="el.link" _target="blank">
              <span class="icons" :class="`icon-${el.icon}`"></span>
            </a>    
          </li>
        </ul>
      </div>
      <div class="fake-pipe">
        <p class="text-sm mb-2">
          <a href="https://www.latindex.org/latindex/inicio" target="_blank">Revista FEGLININ</a>
        </p>
        <p class="text-sm">
          <nuxt-link to="/aviso-de-privacidad">Aviso de privacidad</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</div>
</template>


<script>
//  {
//           label: 'FEGLININ',
//           links: [
//             {
//               icon: 'fb',
//               link: 'https://www.facebook.com/fedeglobal.deingenierosindustriales'
//             },
//             {
//               icon: 'in',
//               link: 'https://www.linkedin.com/in/-fgdp-/'
//             }
//           ]
//         }, 
export default {
  name: 'Header',
  data () {
    return {
      social: [
        {
          label: 'TUT',
          links: [
            {
              icon: 'fb',
              link: 'https://www.facebook.com/TecTolucaOficial'
            },
            {
              icon: 'in',
              link: 'https://www.linkedin.com/company/tecnologico-universitario-toluca/'
            }
          ]
        }, {
          label: 'MIDIT',
          links: [
            {
              icon: 'fb',
              link: 'https://www.facebook.com/'
            },
            {
              icon: 'in',
              link: 'https://www.linkedin.com/'
            }
          ]
        }, {
          label: 'FGDP',
          links: [
            {
              icon: 'fb',
              link: 'https://www.facebook.com/FedeGlobal'
            },
            {
              icon: 'in',
              link: 'https://www.linkedin.com/in/-fgdp-'
            },
            {
              icon: 'tw',
              link: 'https://twitter.com/Federacion_Glob'
            }
          ]
        }
      ]
    }
  }
}
</script>


<style lang="scss">
.footer {
  padding: 50px 0;

  .fake-pipe {
    padding-left: 5em;
    position: relative;

    &:before {
      content: '';
      left: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      position: absolute;
      background: #ffffff;
    }
  }

  &__institutes {
    img {
      // width: 150px;
      height: 60px;
      margin-bottom: 20px;
    }
  }

  .icons {
    width: 22px;
    height: 22px;
    display: block;
    background: center center no-repeat;
    background-size: contain;

    &.icon-fb {
      background-image: url("~static/icons/facebook.png");
    }

    &.icon-in {
      background-image: url("~static/icons/in.png");
    }

    &.icon-tw {
      background-image: url("~static/icons/tw.png");
    }
  }
}
</style>
