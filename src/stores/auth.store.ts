import { useLocalStorage } from '@vueuse/core';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { router } from '../router';
import { fbAuth } from '../utils/firebase';
import { importAppStore } from '../utils/import.utility';

export const AuthStore = defineStore('auth', () => {
  const authorized = useLocalStorage<Boolean>('authorized', false);

  const setAuthorized = (value: boolean) => {
    authorized.value = value;
  };

  const registerWithEmail = async (email: string, password: string) => {
    const appStore = await importAppStore();
    await createUserWithEmailAndPassword(fbAuth, email, password)
      .then((_) => {
        appStore.setMessage('Successfully registered', 'success');
      })
      .catch((err) => {
        appStore.setMessage(err.message, 'error');
      });
  };

  const loginWithEmail = async (email: string, password: string) => {
    const appStore = await importAppStore();
    signInWithEmailAndPassword(fbAuth, email, password)
      .then(() => {
        setAuthorized(true);
        router.push('/dashboard');
      })
      .catch((err) => {
        appStore.setMessage(err.message, 'error');
      });
  };

  const loginWithGoogle = async () => {
    const appStore = await importAppStore();
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider)
      .then(() => {
        setAuthorized(true);
        router.push('/dashboard');
      })
      .catch((err) => appStore.setMessage(err.message, 'error'));
  };

  const loginAsGuest = async () => {
    const appStore = await importAppStore();
    signInAnonymously(fbAuth)
      .then(() => {
        setAuthorized(true);
        router.push('/dashboard');
      })
      .catch((err) => {
        appStore.setMessage(err.message, 'error');
      });
  };

  const logout = async () => {
    const appStore = await importAppStore();
    signOut(fbAuth)
      .then(() => {
        setAuthorized(false);
        router.push('/login');
      })
      .catch((err) => appStore.setMessage(err.message, 'error'));
  };

  return {
    authorized,
    setAuthorized,
    registerWithEmail,
    loginWithEmail,
    loginWithGoogle,
    loginAsGuest,
    logout,
  };
});
