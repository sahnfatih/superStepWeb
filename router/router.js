import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
];

const router = new VueRouter({
  routes,
});

export default router;

