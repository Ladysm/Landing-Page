// importo el hook para cambiar el esato y los dos arhcivos
import { useState } from 'react';
import { Linktreewerun } from '../Linktreewerun/Linktreewerun';
import { Linktree } from '../Linktree/linktree';
// import los estilos del contianer
import './Container.css';
// creo un componente
export const Container = () => {
  // inicializo la variable en falso para que no se muestre cuando se renderiza la pagina
  const [showLinktree, setShowLinktree] = useState(false);
  const [showLinktreewerun, setShowLinktreewerun] = useState(false);
  // creo el evento click
  const handleClickPegasus = () => {
    // seteo la variable para cambiar el estado de la variable cuando le doy click
    // al botòn, uso el operador negaciòn para volver la variable boleana en lo opuesto
    // es decir, se incializa valiendo false(no se ve ), le doy click y se cambia el valor
    // a true por lo que se visualiza, y si le vuelvo a dar click se cambia a false y se oculta
    setShowLinktree(!showLinktree);
  };
  const handleClickWeRun = () => {
    setShowLinktreewerun(!showLinktreewerun);
  };

  return (
    <div className='container-linktree'>
      <div className="text-square-container">

        <h2 >¡Visítanos y encuentra tu calzado deportivo ideal!</h2>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="btn btn-warning button-pegaus"

          onClick={handleClickPegasus}
        >
          Linktree pegasus
        </button>
        {/* si showLinktree es verdadero se muestra el sub componente Linktree, de lo contario no se muestra */}
        {showLinktree && <Linktree />}
        <button
          type="button"
          className="btn btn-warning button-werun"
          onClick={handleClickWeRun}
        >
          Linktree We Run
        </button>
        {showLinktreewerun && <Linktreewerun />}
      </div>
    </div>
  );
};
