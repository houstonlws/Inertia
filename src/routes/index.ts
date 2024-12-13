import LandingPage from '@/pages/landing.page.vue';
import LoginPage from '@/pages/login.page.vue';
import RegisterPage from '@/pages/register.page.vue';

export default [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
];
