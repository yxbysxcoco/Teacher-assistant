import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(antd);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
