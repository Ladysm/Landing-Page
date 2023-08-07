import LinkTree from '../linktree/Linktree.jsx';
import './linktree/linktree.css';
import './components/Linktreewerun/Linktreewerun.css';
import { Linktreewerun } from './Linktreewerun/Linktreewerun.jsx';
export const Container = () => {
  return (
    <div className='container-linktree'>

      <LinkTree/>
      <Linktreewerun/>

    </div>
  );
};
