<template>
  <div class="vue-effect-container">
    <div class="vue-effect-page" :class="outClass ? outClass : ''">
      <router-view name='prev'/>
    </div>
    <div class="vue-effect-page" :class="inClass ? inClass : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vue-effect-page',
    props: ['defaultEffect'],
    data() {
      return {
        outClass: false,
        inClass: 'effect-page-current',

        nextPageClass: false,
        currentPageClass: false
      }
    },

    methods: {
      getEffectInOut(effectID) {
        let effectObj = null;

        this.$effectPage.effects.forEach((effect) => {
          if (effect.id === '' + effectID || effect.code === effectID) {
            effectObj = effect;
          }
        });

        return effectObj;
      }
    },

    beforeCreate() {
      this.$effectPage.setEffect = (routeName, effectID) => {
        const nextPage = this.$router.options.routes.find(route => route.name === routeName);

        if (nextPage) {
          nextPage.effect = effectID;
        }
      };
    },

    created() {
      this.$router.beforeEach((to, from, next) => {
        let toRoute = this.$router.options.routes.find(route => route.name === to.name);
        let effectID = toRoute && toRoute.effect ? toRoute.effect : this.defaultEffect;

        if (effectID) {
          let getEffectInOut = this.getEffectInOut(effectID);

          if (getEffectInOut) {
            this.outClass = getEffectInOut.outClass + ' effect-page-current';
            this.inClass = getEffectInOut.inClass + ' effect-page-current';
          }

          this.$set(this.$effectPage, 'current', getEffectInOut);
        }

        to.matched[0].components.prev = from.matched[0].components.default;

        next();
      });
    },

    mounted() {
      'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'.split(' ').forEach((type) => {
        let vueEffectPageEl = document.querySelectorAll('.vue-effect-page:last-of-type');

        if (vueEffectPageEl[0]) { 
          vueEffectPageEl[0].addEventListener(type, () => {
            this.outClass = false;
            this.inClass = ' effect-page-current';
          });
        }
      });
    }
}
</script>

<style lang="scss">
@import '../scss/animations.scss';

.vue-effect-container {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  perspective: 1200px;
  
  @import '../scss/effects.scss';

  .vue-effect-page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;

    &.effect-page-current {
      visibility: visible;
      z-index: 1;
    }
  }
}
</style>