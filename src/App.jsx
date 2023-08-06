// import { useState } from 'react'
import './App.css';
import './linktree/linktree.css';
import { Slide } from './components/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';
import { Linktree } from './linktree/Linktree';
// import { Carousel } from './img/img01.jpg'

function App () {
  return (
    <div className='App'>
      <Slide/>
      <Subscription/>
      <Linktree/>
    </div>
  );
}

export default App;
