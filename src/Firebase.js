import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC1Aw85j2P97cYC7Ige7hgMTmy7EzV_g8c',
  authDomain: 'kasirku-5e78a.firebaseapp.com',
  projectId: 'kasirku-5e78a',
  storageBucket: 'kasirku-5e78a.firebasestorage.app',
  messagingSenderId: '608502685203',
  appId: '1:608502685203:web:2f8ce706a68fb93b6ae9e6',
  measurementId: 'G-SW1F2FQ9TS',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
