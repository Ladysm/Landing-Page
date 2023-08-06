// import { useState } from 'react'
import './App.css';
import { Slide } from './components/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';
// import { Carousel } from './img/img01.jpg'

function App () {
  return (
    <div className='App'>
      <Slide/>
      <Subscription/>
    </div>
  );
}

export default App;
