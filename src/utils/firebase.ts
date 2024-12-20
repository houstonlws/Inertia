import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthStore } from '../stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6XVHUocBiV7JJbeNLfgZp8CdT1KwTHVQ',
  authDomain: 'houstonlewis-inertia.firebaseapp.com',
  projectId: 'houstonlewis-inertia',
  storageBucket: 'houstonlewis-inertia.firebasestorage.app',
  messagingSenderId: '645303927429',
  appId: '1:645303927429:web:bff2df41c8195be495dfec',
};

const firebase = initializeApp(firebaseConfig);

export const fbAuth = getAuth(firebase);

export const checkAuth = () => {
  onAuthStateChanged(fbAuth, async (user) => {
    if (user) {
      AuthStore().authorized = true;
      console.info('user is logged in');
    } else {
      AuthStore().authorized = false;
      console.info('user is logged out');
    }
  });
};
