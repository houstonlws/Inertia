import { defineStore } from 'pinia';
import * as authLogin from './auth.login';
import * as authRegister from './auth.register';

export const AuthStore = defineStore('auth', () => {
  return {
    ...authLogin,
    ...authRegister,
  };
});
