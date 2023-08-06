import React, { useState } from 'react';
import Modal from 'react-modal';

export const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor.
    console.log('Nombre:', name);
    console.log('Email:', email);
    // Cerrar el modal después de enviar el formulario.
    setIsModalOpen(false);
  };

  return (
    <div className='square-subscription'>
      <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>
      <button type="button" className="btn btn-secondary btn-subscription" onClick={handleClick}>
        SUSCRÍBETE
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Formulario de Suscripción"
      >
        <h2>Formulario de Suscripción</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </Modal>
    </div>
  );
};
