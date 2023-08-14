// importo las imagenes
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
// eslint-disable-next-line no-unused-vars
// aquì utilizo boobstrap v5 para crear el carousel
import * as bootstrap from 'bootstrap';

export const Slide = () => {
  return (
    <div id="carousel" className ="carousel slide" data-bs-ride="carousel">
      {/* se  crea el contenedor, se usa la clase del boostrap, y se condigura oara que incie automaticamente */}
      <div className ="carousel-inner">
        {/* es el contenedor de las diapositivas */}
        <div className ="carousel-item active" data-bs-interval="3000">
          {/* cada una de las imagenes, las cuales tiene una duraciòn de 3 segundos */}
          {/* display block, width 100% */}
          <img src={img1} className ="d-block w-100" alt=""/>
        </div>

        <div className ="carousel-item" data-bs-interval="3000">
          <img src={img2} className ="d-block w-100" alt="..."/>
        </div>

        <div className ="carousel-item" data-bs-interval="3000">
          <img src={img3} className ="d-block w-100" alt="..."/>
        </div>

      </div>
      <button className ="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className ="visually-hidden"></span>
      </button>
      <button className ="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className ="carousel-control-next-icon" aria-hidden="true"></span>
        <span className ="visually-hidden"></span>
      </button>
    </div>
  );
};
