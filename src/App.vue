<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/second-page">Second Page</router-link>
      <a href="javascript://" @click="randomEffect">Random effect</a>
      <select v-model="defaultEffect" @change="onChangeEffect">
        <option v-for="effect, key in $effectPage.effects" :key="key" :value="effect.id">{{ effect.name }}</option>
      </select>
    </nav>
    <vue-effect-page :defaultEffect="defaultEffect">
      <router-view/>
    </vue-effect-page>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultEffect: 33
    }
  },
  methods: {
    generateRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomEffect() {
      const effectID = this.generateRandom(1, 67);
      
      this.$effectPage.setEffect('random-page', effectID);

      this.$router.push('/').finally(() => {
        this.$router.push('/random-page');
      });
    },

    onChangeEffect() {
      this.$effectPage.setEffect('second-page', this.defaultEffect);

      this.$router.push('/').finally(() => {
        this.$router.push('/second-page');
      });
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;

  nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #222;
    z-index: 9999;

    a {
      padding: 10px 15px;
      display: inline-block;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: #000;
      }

      &.router-link-exact-active {
        background: #000;
        padding-bottom: 8px;
        border-bottom: 2px solid #fff;
      }
    }

    select {
      margin-left: 20px;
      padding: 5px;
      border: none;
    }
  }

  #page {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100%;
  }
}
</style>
