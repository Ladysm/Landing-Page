import { data, data2 } from '../data';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Linktree = () => {
  return (
    <div className='container-pegasus' >

      <Avatar image={data.img} className="mr-2" size="xlarge" shape="circle" />
      <h1>{data.name}</h1>

    </div>

  );
};
