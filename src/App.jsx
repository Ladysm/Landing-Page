// import { useState } from 'react'
import './App.css';
import './linktree/linktree.css';
import './components/Linktreewerun/Linktreewerun.css';
import { Slide } from './components/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';
import { Linktree } from './linktree/Linktree';
import {Linktreewerun } from './components/Linktreewerun/Linktreewerun.jsx';
// import { Carousel } from './img/img01.jpg'

function App () {
  return (
    <div className='App'>
      <Slide/>
      <Subscription/>
      <Linktree/>
      <Linktreewerun/>
      
    </div>
  );
}

export default App;
