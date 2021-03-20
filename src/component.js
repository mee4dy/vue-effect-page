import Vue from 'vue';
import VueEffectPage from './components/VueEffectPage.vue';
import effects from './components/effects';

Vue.prototype.$effectPage = {
	effects: effects,
	current: null
};

const Components = {
    VueEffectPage,
};

Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name]);
});

export default Components;