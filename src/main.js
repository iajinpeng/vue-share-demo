import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routerConfig from './router'
import store from './store/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.use(Router);
Vue.use(iView);

Vue.config.productionTip = false

const router = new Router(routerConfig)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
