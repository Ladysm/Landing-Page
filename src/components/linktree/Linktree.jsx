import { data } from '../data';
import { Avatar } from 'primereact/avatar';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export const Linktree = () => {
  const bogotaLocations = data.links.find(city => city.city === 'BOGOTÁ').locations;
  const medellinLocations = data.links.find(city => city.city === 'MEDELLIN').locations;
  const caliLocations = data.links.find(city => city.city === 'CALI').locations;
  const barranquillaLocations = data.links.find(city => city.city === 'BARRANQUILLA').locations;
  const manizalesLocations = data.links.find(city => city.city === 'MANIZALES').locations;
  const pereiraLocations = data.links.find(city => city.city === 'PEREIRA').locations;

  return (

    <div className='container-pegasus'>
      <div className='card-pegasus'>
        <Avatar image={data.img} className="image-pegasus" size="xlarge" shape="circle" />
        <div className="container-subtitle"><h3 className="subtitle">{data.name}</h3></div>
        <div className="slogan"><p>{data.slogan}</p></div>
        <div className="container-buttons">
          <p className="cities" >BOGOTÁ</p>
          {bogotaLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus">
                {location.name}
              </button>
            </a>
          ))}

          <p className="cities" >MEDELLIN</p>
          {medellinLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus">
                {location.name}
              </button>
            </a>
          ))}

          <p className="cities">CALI</p>
          {caliLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus">
                {location.name}
              </button>
            </a>
          ))}
          <p className="cities">BARRANQUILLA</p>
          {barranquillaLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus">
                {location.name}
              </button>
            </a>
          ))}
          <p className="cities">MANIZALES</p>
          {manizalesLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus ">
                {location.name}
              </button>
            </a>
          ))}

          <p className="cities">PEREIRA</p>
          {pereiraLocations.map(location => (
            <a href={location.url} target="_blank" rel="noopener noreferrer" key={location.name}>
              <button type="button" className="btn btn-warning button btn-pegasus">
                {location.name}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
};
