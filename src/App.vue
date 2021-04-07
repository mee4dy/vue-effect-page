<template>
    <div id="app">
        <nav>
            <div class="left-side">
                <a href="https://github.com/mee4dy/vue-effect-page" target="_blank">
                    <i class="fab fa-github"></i> 
                    <span>GITHUB</span>
                </a>
                <a href="https://www.npmjs.com/package/vue-effect-page" target="_blank">
                    <i class="fab fa-npm"></i> 
                    <span>NPM</span>
                </a>
            </div>
            <router-link to="/">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </router-link>
            <router-link to="/second-page">
                <i class="far fa-file"></i>
                <span>Second Page</span>
            </router-link>
            <router-link to="/all-effects">
                <i class="fas fa-desktop"></i>
                <span>All effects</span>
            </router-link>
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
    metaInfo() {
      return {
        meta: [{
          name: 'google-site-verification',
          content: 't9gfS0_MWN2AXm8atc5Dv-A9RfEEc3-Kb7-OqLARfGk',
        }]
      }
    },
}
</script>

<style>
@import 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
</style>

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
  overflow: hidden;

  nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #222;
    z-index: 9999;

    .left-side {
      position: absolute;
      left: 0;
    }

    .separator {
      display: inline-block;
      margin: 0 15px;
    }

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

      i {
        margin-right: 7px;
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
