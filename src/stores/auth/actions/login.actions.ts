import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { fbAuth } from '../../../utils/firebase';
import { importAppStore } from '../../../utils/importAppStore';
import { setAuthorized } from '../auth.state';

export const loginWithEmail = async (email: string, password: string) => {
  const appStore = await importAppStore();
  const valid = !!(await signInWithEmailAndPassword(
    fbAuth,
    email,
    password
  ).catch((err) => {
    appStore.setMessage(err.message, 'error');
  }));
  setAuthorized(valid);
};

export const loginWithGoogle = async () => {
  const appStore = await importAppStore();
  const provider = new GoogleAuthProvider();
  const valid = !!(await signInWithPopup(fbAuth, provider).catch((err) => {
    appStore.setMessage(err.message, 'error');
  }));
  setAuthorized(valid);
};

export const loginAsGuest = async () => {
  const appStore = await importAppStore();
  const valid = !!(await signInAnonymously(fbAuth).catch((err) => {
    appStore.setMessage(err.message, 'error');
  }));
  setAuthorized(valid);
};

export const logout = async () => {
  const appStore = await importAppStore();
  await signOut(fbAuth)
    .then(() => setAuthorized(false))
    .catch((err) => appStore.setMessage(err.message, 'error'));
};
