// import { useState } from 'react'
import './App.css';
import { Container } from './components/Container.jsx';
import { Slide } from './components/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';

// import { Carousel } from './img/img01.jpg'

function App () {
  return (
    <div className='App'>
      <Slide/>
      <Subscription/>
      <Container/>
      
      
    </div>
  );
}

export default App;
