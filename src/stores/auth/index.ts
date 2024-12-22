import { defineStore } from 'pinia';
import * as login from './actions/login.actions';
import * as register from './actions/register.actions';
import * as state from './auth.state';

export const AuthStore = defineStore('auth', {
  state: () => ({
    ...state,
  }),
  actions: {
    ...login,
    ...register,
  },
});
