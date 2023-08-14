// importo los dos hooks
import { useState } from 'react';
// importo el modal de boostrap
import Modal from 'react-modal';
// importi la funciòn de firebase
import { createpost } from '../../firebase/firebase';

// creo un componente
export const Subscription = () => {
  // inicializo el modal en falso para que no se vea
  const [openModal, setOpenModal] = useState(false);
  // incializo las variables como string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // incializo como false
  const [sent, setSent] = useState(false);

  // creo un evento click en el boton subscrìbete
  const handleClick = () => {
    // este me va cambiar el estado del modal a true para que sea visible
    setOpenModal(true);
  };
  // esta funciòn es para que el usuario le de click por fuera del modal y se cierre
  const handleCloseModal = () => {
    // se cambia el estado a false para que el modal se cierre
    setOpenModal(false);
  };
    // Est funciòn es para borrar los campos del formulario cuando le den al boton enviar
  const resetFields = () => {
    // le cambio el esto a las variables como string vacio
    setName('');
    setEmail('');
    setSent(false);
  };
  // este es el evento submit para realizar el envìo de los datos capturados en los inputs
  const handleSubmit = (e) => {
    // esto es para que la pagina no se recargue al darle click a enviar
    e.preventDefault();
    console.log('Nombre:', name);
    // console.log('Email:', email);
    // aquì llamo a la funciòn  para guardar los datos en firestore
    createpost(name, email);
    // aqui lo cambio a true porque bàsicamente me sirve para indicar que los datos han sido enviados correctamente
    setSent(true);

    // Cerrar el modal después de 3 segundos
    setTimeout(() => {
      // el modal se cierra
      setOpenModal(false);
      // se resetean los campos al llamar la funciòn
      resetFields();
      // se establece los milisegundos
    }, 3000);
  };

  return (
    <div className='square-subscription'>
      <div className='container-text'>
        <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>
      </div>
      <button type="button" className="btn btn-secondary btn-subscription" onClick={handleClick}>
        SUSCRÍBETE
      </button>
      {/* se muestra de acuerdo al valor true o false de la funciòn */ }
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        contentLabel="Formulario de Suscripción"
        className={'custom-modal'}
      >
        {/* se utiliza esa props para cerrar el modal cuando le doy click fuera del modal */ }

        <h3>Formulario de Suscripción</h3>
        {/* se ejecuta la funciòn handleSubmit cuando le doy click a enviar */}
        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="input-container" >
            <label htmlFor="name">Nombre:</label><br />
            {/* capturo los datos */}
            {/* uso el evente onChange que me permite identiifar cuando se cambia el contenido del input */}
            {/* capturo el dato y lo seteo el estado de name */}

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
          {/* cuando sent sea verdadero se meustra el mensaje en un div, de lo contrario no se muestra */}
          {sent && <div className="mesaage-ok"> Datos enviados correctamente <ion-icon name="chevron-down-circle"></ion-icon></div>}

        </form>
      </Modal>
    </div>
  );
};
