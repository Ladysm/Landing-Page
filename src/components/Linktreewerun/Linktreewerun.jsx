import { data2} from '../../data';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../Linktreewerun/linktreewerun.css';


        

export const Linktreewerun = () => {
  return (
    <div className='container-werun' >
      
      <div className='card-werun' >
      <Avatar image={data2.img} className="mr-2" size="xlarge" shape="circle" />
        <h1>{data2.name}</h1>

      </div>

    </div>

  );
};
