import DashboardPage from '@/pages/dashboard.page.vue';
import LandingPage from '@/pages/landing.page.vue';
import LoginPage from '@/pages/login.page.vue';
import RegisterPage from '@/pages/register.page.vue';

export default [
  { path: '/', component: LandingPage, meta: { public: true } },
  { path: '/login', component: LoginPage, meta: { public: true } },
  { path: '/register', component: RegisterPage, meta: { public: true } },
  { path: '/dashboard', component: DashboardPage },
];
