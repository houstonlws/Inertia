import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

export const checkAuth = async () => {
  const { AppStore } = await import('../stores/app.store');
  const { AuthStore } = await import('../stores/auth.store');
  const authStore = AuthStore();
  const appStore = AppStore();

  onAuthStateChanged(fbAuth, (user) => {
    if (user) {
      authStore.setAuthorized(true);
      appStore.fetchLayout();
      console.info('user is logged in');
      return true;
    } else {
      authStore.setAuthorized(false);
      appStore.fetchLayout();
      console.info('user is logged out');
      return false;
    }
  });
};
