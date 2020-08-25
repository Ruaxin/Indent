import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Indent from '@/views/Indent.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/indent',
    name: 'Indent',
    component: Indent
  }
];

const router = new VueRouter({
  routes
});

export default router;
