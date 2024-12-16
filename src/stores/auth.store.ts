import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { fbAuth } from '../utils/firebase';
import responseStore from './response.store';

export const AuthStore = defineStore('auth', {
  state: () => ({
    authorized: false as Boolean,
  }),

  actions: {
    async loginWithemail(email: string, password: string) {
      this.authorized = !!!(await signInWithEmailAndPassword(
        fbAuth,
        email,
        password
      ).catch((err) => responseStore().setMessage(err.message, 'error')));
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      this.authorized = !!!(await signInWithPopup(fbAuth, provider).catch(
        (err) => responseStore().setMessage(err.message, 'error')
      ));
    },
    async loginAsGuest() {
      this.authorized = !!!(await signInAnonymously(fbAuth).catch((err) =>
        responseStore().setMessage(err.message, 'error')
      ));
    },
    async logout() {
      await signOut(fbAuth)
        .then(() => (this.authorized = false))
        .catch((err) => responseStore().setMessage(err.message, 'error'));
    },
  },
});
