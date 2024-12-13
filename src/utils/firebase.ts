import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA6XVHUocBiV7JJbeNLfgZp8CdT1KwTHVQ',
  authDomain: 'houstonlewis-inertia.firebaseapp.com',
  projectId: 'houstonlewis-inertia',
  storageBucket: 'houstonlewis-inertia.firebasestorage.app',
  messagingSenderId: '645303927429',
  appId: '1:645303927429:web:bff2df41c8195be495dfec',
};

export const firebase = initializeApp(firebaseConfig);
