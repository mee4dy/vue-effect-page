import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import RandomPage from './pages/RandomPage';

import VueEffectPage from './component';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueEffectPage)

const router = new VueRouter({
  mode: 'history',
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
      path: '/random-page',
      name: 'random-page',
      component: RandomPage,
    },
  ],
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});