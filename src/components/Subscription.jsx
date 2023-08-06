import React, { useState } from 'react';
import Modal from 'react-modal';

export const Subscription = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
    // Esto lo hago para borrar los campos del formulario cuando le den al boton enviar
  const resetFields = () => {
    setName('');
    setEmail('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor.
    console.log('Nombre:', name);
    console.log('Email:', email);
    // Cerrar el modal después de enviar el formulario.
    setOpenModal(false);
    // borrar campos despues de cerra
    resetFields();
  };

  return (
    <div className='square-subscription'>
      <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>
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
        </form>
      </Modal>
    </div>
  );
};
