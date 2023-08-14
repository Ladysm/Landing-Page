// Importo firebase
import { initializeApp } from 'firebase/app';
// importo los metodos que voy a utilizar
// addDoc para añadir documentos
// firestore para usar la bd
// servertime para
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// pego esta conifguraciòn
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

// creo la funciòn que recibe los parametros nombre y correo
export const createpost = (name, email) => {
  // utilizo la funciòn addDoc, para añadir un documento a la colecciòn la cual se llama data
  // en el objeto esta lo que se va guardar en el db, es decir nombre, email y fecha de creaciòn
  addDoc(collection(db, 'data'), {
    name,
    email,
    createdAt: serverTimestamp()
  })
  // utilizo una promesa para verificar que si funcione correctamente
    .then(() => {
      console.log('funciona!!!');
    })
    .catch((error) => {
      console.error('error:', error);
    });
};
