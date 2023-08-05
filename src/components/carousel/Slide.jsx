import React from 'react'

import React from 'react';
import slide1 from '../assets/img01.jpg';
import slide2 from './assets/';
import slide3 from '../assets/slide3.jpg'

const Slide = () => {
  return (
    <div id="carousel" className ="carousel slide" data-bs-ride="carousel">
        <div className ="carousel-inner">
          <div className ="carousel-item active" data-bs-interval="3000">
            <img src={slide1} className ="d-block w-100" alt=""/>
          </div>
          
 
          <div className ="carousel-item" data-bs-interval="3000">
            <img src={slide2} className ="d-block w-100" alt="..."/>
          </div>
 

          <div className ="carousel-item" data-bs-interval="3000">
            <img src={slide3} className ="d-block w-100" alt="..."/>
          </div>
 
 
        </div>
        <button className ="carousel-control-prev" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
          <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className ="visually-hidden">Previous</span>
        </button>
        <button className ="carousel-control-next" type="button" data-bs-target="#carousel"  data-bs-slide="next">
          <span className ="carousel-control-next-icon" aria-hidden="true"></span>
          <span className ="visually-hidden">Next</span>
        </button>
      </div> 
  )
}

export default Slide