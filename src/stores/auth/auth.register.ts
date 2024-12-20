import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fbAuth } from '../../utils/firebase';
import responseStore from '../response.store';

const registerWithEmail = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(fbAuth, email, password)
    .then((_) => {
      responseStore().setMessage('Successfully registered', 'success');
    })
    .catch((err) => {
      responseStore().setMessage(err.message, 'error');
    });
};

export { registerWithEmail };
