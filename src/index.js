import Vue from 'vue';

import router from './router';
import store from './store';

import App from './App.vue';

const app = new Vue({
  router,
  store,
  render(h) {
    return h(App);
  }
});

app.$mount(document.querySelector('#app'));