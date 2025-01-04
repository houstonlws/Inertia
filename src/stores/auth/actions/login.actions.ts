import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { router } from '../../../router';
import { fbAuth } from '../../../utils/firebase';
import { importAppStore } from '../../../utils/importAppStore';
import { setAuthorized } from '../auth.state';

export const loginWithEmail = async (email: string, password: string) => {
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

export const loginWithGoogle = async () => {
  const appStore = await importAppStore();
  const provider = new GoogleAuthProvider();
  signInWithPopup(fbAuth, provider)
    .then(() => {
      setAuthorized(true);
      router.push('/dashboard');
    })
    .catch((err) => appStore.setMessage(err.message, 'error'));
};

export const loginAsGuest = async () => {
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

export const logout = async () => {
  const appStore = await importAppStore();
  signOut(fbAuth)
    .then(() => {
      setAuthorized(false);
      router.push('/login');
    })
    .catch((err) => appStore.setMessage(err.message, 'error'));
};
