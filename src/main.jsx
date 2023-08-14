/* realizo las correspondientes importaciones */
// para usar react
import React from 'react';
// Importa ReactDOM, que es la biblioteca utilizada para renderizar los componentes
import ReactDOM from 'react-dom/client';
// Importa el componente principal de la aplicación desde el archivo App.jsx
import App from './App.jsx';
// importa el modal
import Modal from 'react-modal';
// Importa los estilos
import './App.css';
// configuro el modal para vincularlo a la raiz de mi aplicaciòn para que funcione bien
Modal.setAppElement('#root');
//  aquì estoy redenderizando en mi elemento root que se encuentra en el html
ReactDOM.createRoot(document.getElementById('root')).render(
  // permite identificar problemas que pueda afectar el renderizado
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
