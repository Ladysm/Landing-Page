import { useState, useEffect } from 'react';
import axios from 'axios';
import '../youtube/youtube.css';
/* youtube para desarrolladores, adquiero credenciales y la apikey */

export const Youtube = () => {
  /* incializo el string vacio para el id del video */
  const [videoId, setVideoId] = useState('');
  // esto lo obtengo de la api
  const apiKey = 'AIzaSyD_ZsWbg-6qC-kxGGOOX7NB544TmLtAbTk';

  useEffect(() => {
    /* pongo la url del video */
    const videoUrl = 'https://www.youtube.com/watch?v=R0w72YEu2Jw';
    // Extraigo  la ID del video de la URL
    const videoId = videoUrl.split('v=')[1];

    // guardo el id del video y la apikey
    // esta url se sacò de la api
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
    // utilizo hacios para hacer la solicitud http con get, y mando la apiurl
    axios.get(apiUrl)
      .then(response => {
        // si la promesa se cumple se guarda la respuesya en la variable
        const videoData = response.data;
        console.log(videoData, 'el video okay');
        // se cambia el esto de la variable con el ide del video
        setVideoId(videoId);
        console.log(videoId, 'elid');
      })
      .catch(error => {
        // Manejo de errores
        console.error('error', error);
      });
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <div className="youtube-container">
      <div className='container-title'> <h4 className='video-title'>Historias que nos inspiran</h4>
      </div>
      {/* */}
      {videoId && (
        <iframe className='container-video'
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}

        ></iframe>
      )}
      <div className='footer-container'>
        <p className='footer'>Todos los derechos reservados ©</p>
      </div>
    </div>
  );
};
