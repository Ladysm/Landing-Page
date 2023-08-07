import { useState } from 'react';
import { Linktreewerun } from './Linktreewerun/Linktreewerun';
import { Linktree } from '../linktree/Linktree';
import './Container.css';
import './Linktreewerun/Linktreewerun.css';
import '../linktree/linktree.css';

export const Container = () => {
  // lo inicializo para que no se muestre
  const [showLinktree, setShowLinktree] = useState(false);
  const [showLinktreewerun, setShowLinktreewerun] = useState(false);
  // creo el evento
  const handleClickPegasus = () => {
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

