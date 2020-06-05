import Vue from 'vue';
import VueRouter from 'vue-router';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import Formacao from './components/Formacao.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/formacao', component: Formacao },
  {path: '/'}
];

const router =new VueRouter ({
  routes,
  mode: 'history'
}); 

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
