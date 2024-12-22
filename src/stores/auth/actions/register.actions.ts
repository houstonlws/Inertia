import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fbAuth } from '../../../utils/firebase';
import { importAppStore } from '../utils/importAppStore';

export const registerWithEmail = async (email: string, password: string) => {
  const appStore = await importAppStore();
  await createUserWithEmailAndPassword(fbAuth, email, password)
    .then((_) => {
      appStore.setMessage('Successfully registered', 'success');
    })
    .catch((err) => {
      appStore.setMessage(err.message, 'error');
    });
};
