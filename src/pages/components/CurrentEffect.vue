<template>
    <div v-if="$effectPage.current && $router.currentRoute.name === 'all-effects'" id="current-effect-info">
        <select v-model="effectID" @change="onChangeEffect">
            <option v-for="effect, key in $effectPage.effects" :key="key" :value="effect.id">{{ effect.name }}</option>
        </select>
        <div class="info-body">
            <h4 class="effect-id">{{ effectID }} or {{ $effectPage.effects.length }}</h4>
            <div class="info-line">
                <div class="value-block" @click="clickToCopy">{{ $effectPage.current.code }}</div> 
                <i class="fas fa-clipboard-check"></i>
            </div>
            <div class="control-panel">
                <button class="prev-btn" @click="prevEffect" :disabled="effectID <= 1">
                    <i class="fas fa-arrow-left"></i>
                    <span>Next effect</span>
                </button>
                <button class="repeat-btn" @click="repeatEffect">
                    <i class="fas fa-redo"></i>
                    <span>Repeat</span>
                </button>
                <button class="next-btn" @click="nextEffect" :disabled="effectID >= $effectPage.effects.length">
                    <span>Next effect</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <div class="footer-line">You can also switch effects using the keyboard: ↑, →, ↓, ←</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      effectID: this.$effectPage.current ? this.$effectPage.current.id : 33
    }
  },
  mounted() {
    document.onkeydown = (event) => {
        switch (event.keyCode) {
            case 38:
            case 39:
                this.nextEffect();
                break;
            case 37:
            case 40:
                this.prevEffect();
                break;
        }
    };
  },
  methods: {
      clickToCopy($event) {
          let target = $event.target;
          let str = target.innerText;

          target.classList.add('copied');

          setTimeout(() => {
              target.classList.remove('copied');
          }, 250);

          this.copy(str);
      },

      copy(str) {
          const el = document.createElement('textarea');
          el.value = str;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
      },

      onChangeEffect() {

      },

      showEffect() {
        this.$effectPage.setEffect('all-effects', this.effectID);

        this.$router.push('/').finally(() => {
          this.$router.push('/all-effects');
        });
      },

      repeatEffect() {
          this.showEffect();
      },

      prevEffect() {
        if (this.effectID > 1) this.effectID--;
      },

      nextEffect() {
        if (this.effectID < this.$effectPage.effects.length) this.effectID++;
      }
  },
  watch: {
    effectID() {
      this.showEffect();
    }
  }
}
</script>   

<style lang="scss">
#current-effect-info {
    position: relative;
    min-width: 280px;
    margin-top: 10px;
    background: #fff;
    border-radius: 2px;
    color: #000;
    box-shadow: 2px 2px 5px #444;

    select {
        width: calc(100% - 25px);
        background: #fff;
        z-index: 999;
        padding: 10px 0px;
        border: none;
        margin: 0 5px 0 5px;
        outline: none;
    }

    .info-body {
        border-top: 1px solid #ccc;
        padding: 10px;

        .effect-id {
            margin-bottom: 10px;
        }

        .info-line {
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            b {
                font-size: 14px;
            }

            .value-block {
                cursor: pointer;
                display: inline-block;
                text-align: center;
                color: #000;
                font-size: 13px;
                border: 1px solid #ccc;
                border-radius: 2px;
                padding: 5px;
                width: 80%;
                transition: background 150ms;

                &:hover {
                    background: #eee;
                }

                & ~ i {
                    position: absolute;
                    right: 0;
                    display: inline-block;
                    opacity: 0;
                    transition: opacity 250ms;
                    margin-left: 5px;
                    color: #222;
                }

                &.copied ~ i {
                    opacity: 1;
                }
            }
        }

        button {
            cursor: pointer;
            padding: 5px;

            &.prev-btn {
                i {
                    margin-right: 5px;
                }
            }

            &.repeat-btn {
                margin: 0 10px;

                i {
                    margin-right: 5px;
                }
            }

            &.next-btn {
                i {
                    margin-left: 5px;
                }
            }
        }
    }

    .footer-line {
        font-size: 12px;
        color: #777;
        padding: 0 10px 5px 10px;
    }
}
</style>