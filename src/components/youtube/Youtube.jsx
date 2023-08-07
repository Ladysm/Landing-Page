import YouTube from 'react-youtube';

export const Youtube = () => {
  const video = 'https://www.youtube.com/watch?v=R0w72YEu2Jw';
  const videoId = video.split('v=')[1];

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1 // Auto-play the video
    }
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};








