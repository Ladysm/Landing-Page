import firebase from 'firebase.app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDke0USk-R53TC9S1ksxif0-x3puoxnFRk',
  authDomain: 'landing-page-77329.firebaseapp.com',
  projectId: 'landing-page-77329',
  storageBucket: 'landing-page-77329.appspot.com',
  messagingSenderId: '610330182936',
  appId: '1:610330182936:web:8f23bcfe7471951e750a6d',
  measurementId: 'G-D8JX7HC145'
};

// incializo firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
