// Импорт vue компонента
import Vue from 'vue';
import VueEffectPage from './components/VueEffectPage.vue';

const Components = {
    VueEffectPage,
};

Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name]);
});

export default Components;