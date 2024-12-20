import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { ref } from 'vue';
import { fbAuth } from '../../utils/firebase';
import responseStore from '../response.store';

const authorized = ref<Boolean>(false);

const loginWithEmail = async (email: string, password: string) => {
  authorized.value = !!(await signInWithEmailAndPassword(
    fbAuth,
    email,
    password
  ).catch((err) => {
    responseStore().setMessage(err.message, 'error');
    return false;
  }));
};

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  authorized.value = !!(await signInWithPopup(fbAuth, provider).catch((err) => {
    responseStore().setMessage(err.message, 'error');
    return false;
  }));
};

const loginAsGuest = async () => {
  authorized.value = !!(await signInAnonymously(fbAuth).catch((err) => {
    responseStore().setMessage(err.message, 'error');
    return false;
  }));
};

const logout = async () => {
  await signOut(fbAuth)
    .then(() => (authorized.value = false))
    .catch((err) => responseStore().setMessage(err.message, 'error'));
};

export { authorized, loginAsGuest, loginWithEmail, loginWithGoogle, logout };
