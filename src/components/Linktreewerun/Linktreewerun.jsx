import { data2 } from '../../data';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../Linktreewerun/linktreewerun.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Linktreewerun = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='container-werun'>
      <div className='card-werun'>
        <div className="contianer-title">
          <Avatar image={data2.img} className="mr-2" size="xlarge" shape="circle" />
          <h3>{data2.name}</h3>
          <div className="contianer-sn">
            <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => handleButtonClick(data2.tiktok)} />
            <FontAwesomeIcon icon={faTiktok} className="icon" onClick={() => handleButtonClick(data2.instagram)} />
            <FontAwesomeIcon icon={faSpotify} className="icon" onClick={() => handleButtonClick(data2.spotify)} />
            <FontAwesomeIcon icon={faYoutube} className="icon" onClick={() => handleButtonClick(data2.youtube)} />
          </div>
          <div className="container-slogan">
            {data2.slogan}
          </div>
          <div className="container-buttons-werun">

            {data2.links[0].store.map(location => (
              <button
                key={location.name}
                type="button"
                className="btn btn-warning button btn-werun"
                onClick={() => handleButtonClick(location.url)}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
