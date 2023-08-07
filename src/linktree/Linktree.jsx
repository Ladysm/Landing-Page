import { data, data2 } from '../data';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Linktree = () => {
  return (
    <div>
      <div className='container-pegasus'>
        <Avatar image={data.img} className="image-pegasus" size="large" shape="circle" />
        <div className="container-subtitle"><h1 className="subtitle">{data.name}</h1></div>
        <div className="slogan"><h3>{data.slogan}</h3></div>
        <div className="container-buttons">
          {data.links.find(city => city.city === 'BOGOTÁ').locations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button">
                {location.name}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};







