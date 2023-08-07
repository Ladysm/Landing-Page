import data from '../../data';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Linktreewerun = () => {
  return (
    <div className="square-linktree">
      <div className="text-square-linktree"><h2>¡Visítanos y encuentra tu calzado deportivo ideal!</h2></div>
      <div className='werun-container'>

        <Avatar image={data.img} className="mr-2" size="xlarge" shape="circle" />
        <h1>{data.name}</h1>

      </div>

    </div>

  );
};