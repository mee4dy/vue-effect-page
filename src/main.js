import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import AllEffects from './pages/AllEffects';
import CurrentEffect from './pages/components/CurrentEffect';

import VueEffectPage from './component';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueEffectPage)
Vue.use(VueEffectPage)
Vue.component('CurrentEffect', CurrentEffect)

const router = new VueRouter({
  mode: 'history',
  base: '/vue-effect-page/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: SecondPage,
      effect: '5'
    },
    {
      path: '/all-effects',
      name: 'all-effects',
      component: AllEffects,
    },
  ],
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});