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
    props: ['effect'],
    data() {
      return {
        outClass: false,
        inClass: 'effect-page-current',

        nextPageClass: false,
        currentPageClass: false
      }
    },

    methods: {
      getEffectInOut(effect) {
        let outClass = false;
        let inClass = false;

        switch(effect) {
          case 1:
            outClass = 'effect-page-moveToLeft';
            inClass = 'effect-page-moveFromRight';
            break;
          case 2:
            outClass = 'effect-page-moveToRight';
            inClass = 'effect-page-moveFromLeft';
            break;
          case 3:
            outClass = 'effect-page-moveToTop';
            inClass = 'effect-page-moveFromBottom';
            break;
          case 4:
            outClass = 'effect-page-moveToBottom';
            inClass = 'effect-page-moveFromTop';
            break;
          case 5:
            outClass = 'effect-page-fade';
            inClass = 'effect-page-moveFromRight effect-page-ontop';
            break;
          case 6:
            outClass = 'effect-page-fade';
            inClass = 'effect-page-moveFromLeft effect-page-ontop';
            break;
          case 7:
            outClass = 'effect-page-fade';
            inClass = 'effect-page-moveFromBottom effect-page-ontop';
            break;
          case 8:
            outClass = 'effect-page-fade';
            inClass = 'effect-page-moveFromTop effect-page-ontop';
            break;
          case 9:
            outClass = 'effect-page-moveToLeftFade';
            inClass = 'effect-page-moveFromRightFade';
            break;
          case 10:
            outClass = 'effect-page-moveToRightFade';
            inClass = 'effect-page-moveFromLeftFade';
            break;
          case 11:
            outClass = 'effect-page-moveToTopFade';
            inClass = 'effect-page-moveFromBottomFade';
            break;
          case 12:
            outClass = 'effect-page-moveToBottomFade';
            inClass = 'effect-page-moveFromTopFade';
            break;
          case 13:
            outClass = 'effect-page-moveToLeftEasing effect-page-ontop';
            inClass = 'effect-page-moveFromRight';
            break;
          case 14:
            outClass = 'effect-page-moveToRightEasing effect-page-ontop';
            inClass = 'effect-page-moveFromLeft';
            break;
          case 15:
            outClass = 'effect-page-moveToTopEasing effect-page-ontop';
            inClass = 'effect-page-moveFromBottom';
            break;
          case 16:
            outClass = 'effect-page-moveToBottomEasing effect-page-ontop';
            inClass = 'effect-page-moveFromTop';
            break;
          case 17:
            outClass = 'effect-page-scaleDown';
            inClass = 'effect-page-moveFromRight effect-page-ontop';
            break;
          case 18:
            outClass = 'effect-page-scaleDown';
            inClass = 'effect-page-moveFromLeft effect-page-ontop';
            break;
          case 19:
            outClass = 'effect-page-scaleDown';
            inClass = 'effect-page-moveFromBottom effect-page-ontop';
            break;
          case 20:
            outClass = 'effect-page-scaleDown';
            inClass = 'effect-page-moveFromTop effect-page-ontop';
            break;
          case 21:
            outClass = 'effect-page-scaleDown';
            inClass = 'effect-page-scaleUpDown effect-page-delay300';
            break;
          case 22:
            outClass = 'effect-page-scaleDownUp';
            inClass = 'effect-page-scaleUp effect-page-delay300';
            break;
          case 23:
            outClass = 'effect-page-moveToLeft effect-page-ontop';
            inClass = 'effect-page-scaleUp';
            break;
          case 24:
            outClass = 'effect-page-moveToRight effect-page-ontop';
            inClass = 'effect-page-scaleUp';
            break;
          case 25:
            outClass = 'effect-page-moveToTop effect-page-ontop';
            inClass = 'effect-page-scaleUp';
            break;
          case 26:
            outClass = 'effect-page-moveToBottom effect-page-ontop';
            inClass = 'effect-page-scaleUp';
            break;
          case 27:
            outClass = 'effect-page-scaleDownCenter';
            inClass = 'effect-page-scaleUpCenter effect-page-delay400';
            break;
          case 28:
            outClass = 'effect-page-rotateRightSideFirst';
            inClass = 'effect-page-moveFromRight effect-page-delay200 effect-page-ontop';
            break;
          case 29:
            outClass = 'effect-page-rotateLeftSideFirst';
            inClass = 'effect-page-moveFromLeft effect-page-delay200 effect-page-ontop';
            break;
          case 30:
            outClass = 'effect-page-rotateTopSideFirst';
            inClass = 'effect-page-moveFromTop effect-page-delay200 effect-page-ontop';
            break;
          case 31:
            outClass = 'effect-page-rotateBottomSideFirst';
            inClass = 'effect-page-moveFromBottom effect-page-delay200 effect-page-ontop';
            break;
          case 32:
            outClass = 'effect-page-flipOutRight';
            inClass = 'effect-page-flipInLeft effect-page-delay500';
            break;
          case 33:
            outClass = 'effect-page-flipOutLeft';
            inClass = 'effect-page-flipInRight effect-page-delay500';
            break;
          case 34:
            outClass = 'effect-page-flipOutTop';
            inClass = 'effect-page-flipInBottom effect-page-delay500';
            break;
          case 35:
            outClass = 'effect-page-flipOutBottom';
            inClass = 'effect-page-flipInTop effect-page-delay500';
            break;
          case 36:
            outClass = 'effect-page-rotateFall effect-page-ontop';
            inClass = 'effect-page-scaleUp';
            break;
          case 37:
            outClass = 'effect-page-rotateOutNewspaper';
            inClass = 'effect-page-rotateInNewspaper effect-page-delay500';
            break;
          case 38:
            outClass = 'effect-page-rotatePushLeft';
            inClass = 'effect-page-moveFromRight';
            break;
          case 39:
            outClass = 'effect-page-rotatePushRight';
            inClass = 'effect-page-moveFromLeft';
            break;
          case 40:
            outClass = 'effect-page-rotatePushTop';
            inClass = 'effect-page-moveFromBottom';
            break;
          case 41:
            outClass = 'effect-page-rotatePushBottom';
            inClass = 'effect-page-moveFromTop';
            break;
          case 42:
            outClass = 'effect-page-rotatePushLeft';
            inClass = 'effect-page-rotatePullRight effect-page-delay180';
            break;
          case 43:
            outClass = 'effect-page-rotatePushRight';
            inClass = 'effect-page-rotatePullLeft effect-page-delay180';
            break;
          case 44:
            outClass = 'effect-page-rotatePushTop';
            inClass = 'effect-page-rotatePullBottom effect-page-delay180';
            break;
          case 45:
            outClass = 'effect-page-rotatePushBottom';
            inClass = 'effect-page-rotatePullTop effect-page-delay180';
            break;
          case 46:
            outClass = 'effect-page-rotateFoldLeft';
            inClass = 'effect-page-moveFromRightFade';
            break;
          case 47:
            outClass = 'effect-page-rotateFoldRight';
            inClass = 'effect-page-moveFromLeftFade';
            break;
          case 48:
            outClass = 'effect-page-rotateFoldTop';
            inClass = 'effect-page-moveFromBottomFade';
            break;
          case 49:
            outClass = 'effect-page-rotateFoldBottom';
            inClass = 'effect-page-moveFromTopFade';
            break;
          case 50:
            outClass = 'effect-page-moveToRightFade';
            inClass = 'effect-page-rotateUnfoldLeft';
            break;
          case 51:
            outClass = 'effect-page-moveToLeftFade';
            inClass = 'effect-page-rotateUnfoldRight';
            break;
          case 52:
            outClass = 'effect-page-moveToBottomFade';
            inClass = 'effect-page-rotateUnfoldTop';
            break;
          case 53:
            outClass = 'effect-page-moveToTopFade';
            inClass = 'effect-page-rotateUnfoldBottom';
            break;
          case 54:
            outClass = 'effect-page-rotateRoomLeftOut effect-page-ontop';
            inClass = 'effect-page-rotateRoomLeftIn';
            break;
          case 55:
            outClass = 'effect-page-rotateRoomRightOut effect-page-ontop';
            inClass = 'effect-page-rotateRoomRightIn';
            break;
          case 56:
            outClass = 'effect-page-rotateRoomTopOut effect-page-ontop';
            inClass = 'effect-page-rotateRoomTopIn';
            break;
          case 57:
            outClass = 'effect-page-rotateRoomBottomOut effect-page-ontop';
            inClass = 'effect-page-rotateRoomBottomIn';
            break;
          case 58:
            outClass = 'effect-page-rotateCubeLeftOut effect-page-ontop';
            inClass = 'effect-page-rotateCubeLeftIn';
            break;
          case 59:
            outClass = 'effect-page-rotateCubeRightOut effect-page-ontop';
            inClass = 'effect-page-rotateCubeRightIn';
            break;
          case 60:
            outClass = 'effect-page-rotateCubeTopOut effect-page-ontop';
            inClass = 'effect-page-rotateCubeTopIn';
            break;
          case 61:
            outClass = 'effect-page-rotateCubeBottomOut effect-page-ontop';
            inClass = 'effect-page-rotateCubeBottomIn';
            break;
          case 62:
            outClass = 'effect-page-rotateCarouselLeftOut effect-page-ontop';
            inClass = 'effect-page-rotateCarouselLeftIn';
            break;
          case 63:
            outClass = 'effect-page-rotateCarouselRightOut effect-page-ontop';
            inClass = 'effect-page-rotateCarouselRightIn';
            break;
          case 64:
            outClass = 'effect-page-rotateCarouselTopOut effect-page-ontop';
            inClass = 'effect-page-rotateCarouselTopIn';
            break;
          case 65:
            outClass = 'effect-page-rotateCarouselBottomOut effect-page-ontop';
            inClass = 'effect-page-rotateCarouselBottomIn';
            break;
          case 66:
            outClass = 'effect-page-rotateSidesOut';
            inClass = 'effect-page-rotateSidesIn effect-page-delay200';
            break;
          case 67:
            outClass = 'effect-page-rotateSlideOut';
            inClass = 'effect-page-rotateSlideIn';
            break;
        }

        return {
          out: outClass,
          in: inClass
        };
      }
    },

    created() {
      let effect = this.effect;
      let effectIn = false;
      let effectOut = false;

      if (typeof effect.in !== 'undefined' && typeof effect.out !== 'undefined') {
        effectIn = effect.in;
        effectOut = effect.out;
      } else if (typeof effect === 'string' || typeof effect === 'number') {
        let getEffectInOut = this.getEffectInOut(effect);

        effectIn = getEffectInOut.in;
        effectOut = getEffectInOut.out;
      }

      this.$router.beforeEach((to, from, next) => {
        to.matched[0].components.prev = from.matched[0].components.default;

        this.outClass = effectOut + ' effect-page-current';
        this.inClass = effectIn + ' effect-page-current';

        next();
      });

      $('body').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', '.vue-effect-page:last()', () => {
        this.outClass = false;
        this.inClass = ' effect-page-current';
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