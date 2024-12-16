import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { checkAuth } from './utils/firebase';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  checkAuth();
  next();
});

export { router };
