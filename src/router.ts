import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { importAuthStore } from './utils/importAuthStore';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = await importAuthStore();
  if (!to.meta.public && !authStore.authorized) {
    next('/login');
  } else {
    next();
  }
});

export { router };
