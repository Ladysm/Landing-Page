import '../App.css';
import { useState } from 'react';
import { Modal } from 'react-modal';
export const Subscription = () => {
  // Aquì utilizo el hook para inciarlizar el modal en false y asì no se muestra
  // aqui hago el evento del boton
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    console.log('funciona el boton');
  };




  return (
    <div className='square-subscription'>
      <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>
      <button type="button" className="btn btn-secondary btn-subscription"onClick={handleClick}>SUSCRÍBETE</button>
      <div className="modal-dialog modal-dialog-centered">

</div>
    </div>
  );
};
