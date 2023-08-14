// import { useState } from 'react'
import './App.css';
import { Container } from './components/container/container.jsx';
import { Slide } from './components/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';
import { Youtube } from './components/youtube/Youtube';

// import { Carousel } from './img/img01.jpg k'

function App () {
  return (
    <div className='App'>
      <Slide/>
      <Container/>
      <Subscription/>
      <Youtube/>

    </div>
  );
}

export default App;
