import { Linktreewerun } from './Linktreewerun/Linktreewerun';
import { Linktree } from '../linktree/Linktree';
import './Container.css';
import './Linktreewerun/Linktreewerun.css';
import '../linktree/linktree.css';

export const Container = () => {
  return (
    <div className='container-linktree'>
      <div className="text-square-container">
        <h2>¡Visítanos y encuentra tu calzado deportivo ideal!</h2></div>
      <div className='container-pegasus-werun'>
      <Linktree/>
      <Linktreewerun/>
      </div>
      

    </div>
  );
};
