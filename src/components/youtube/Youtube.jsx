import { useState, useEffect } from 'react';
import axios from 'axios';
import '../youtube/youtube.css';
/* youtube para desarrolladores */ 


export const Youtube = () => {
  const [videoId, setVideoId] = useState(''); // Estado para la ID del video
  const apiKey = 'AIzaSyD_ZsWbg-6qC-kxGGOOX7NB544TmLtAbTk'; // Reemplaza con tu clave de API

  useEffect(() => {
    const videoUrl = 'https://www.youtube.com/watch?v=R0w72YEu2Jw'; // Reemplaza con la URL del video
    const videoId = videoUrl.split('v=')[1]; // Extrae la ID del video de la URL

    // Realiza la solicitud a la API de YouTube para obtener la información del video
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    axios.get(apiUrl)
      .then(response => {
        // Maneja la respuesta de la API y establece la ID del video en el estado
        const videoData = response.data;
        if (videoData.items && videoData.items.length > 0) {
          setVideoId(videoId);
        }
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error al obtener los datos del video:', error);
      });
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <div className="youtube-container">
      <div className='container-title'> <h4 className='video-title'>Historias que nos inspiran</h4>
      </div>
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
