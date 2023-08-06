// Importo firebase

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
// o los otros módulos que necesites, como auth, storage, etc.

// y la BD de datos nosql firestore
// importo el mètodo desde firestore para usarlo

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
// incializo firestore BD
const db = getFirestore(app);

// Aqui utilizo creo una funciòn para utilizar
/*
export const createpost = (name, email) => addDoc((db, 'post'), {
name,
email,
createdAt: serverTimestamp(Date)
  
});
*/
export const createpost = (name, email) => {
  addDoc(collection(db, 'post'), {
    name,
    email,
    createdAt: serverTimestamp()
  })
    .then(() => {
      console.log('Documento agregado correctamente');
    })
    .catch((error) => {
      console.error('Error al agregar el documento:', error);
    });
};


// export const colRef = collection(db, 'post');
