import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { createpost } from '../firebase/firebase';
export const Subscription = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // hago esto para borrar el mensaje despuestde haberlo enviado

  // Esto lo hago para borrar los campos del formulario cuando le den al boton enviar
  const resetFields = () => {
    setName('');
    setEmail('');
    setSent('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor.
    console.log('Nombre:', name);
    console.log('Email:', email);
    // aquì llamo a la funciòn  para guardar los datos en firestore
    createpost(name, email);
    setSent(true);

    // Cerrar el modal después de 5 segundos
    setTimeout(() => {
      setOpenModal(false);
      resetFields();
    }, 3000);
  };
  // Limpiar el estado de "sent" al abrir el modal nuevamente
  useEffect(() => {
    if (openModal) {
      setSent(false);
    }
  }, [openModal]);


  return (
    <div className='square-subscription'>
      <div className='container-text'>
      <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>
      </div>
      <button type="button" className="btn btn-secondary btn-subscription" onClick={handleClick}>
        SUSCRÍBETE
      </button>

      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        contentLabel="Formulario de Suscripción"
        className={'custom-modal'}
      >

        <h3>Formulario de Suscripción</h3>

        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="input-container" >
            <label htmlFor="name">Nombre:</label><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Correo Electrónico:</label><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="container-button-sent">
            <button type="submit">Enviar</button>
          </div>
          {sent && <div className="mesaage-ok"> Datos enviados correctamente <ion-icon name="chevron-down-circle"></ion-icon></div>}

        </form>
      </Modal>
    </div>
  );
};
