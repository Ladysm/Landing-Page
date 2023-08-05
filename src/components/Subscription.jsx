import '../App.css'
export const Subscription = () => {
  // aqui hago el evento del boton
  const handleClick = () => {
    console.log('funciona el boton')
  }




  return (
    <div className='square-subscription'>
      <h2>¡Suscríbete y sé el primero en conocer las últimas tendencias en calzado deportivo!</h2>  
      <button type="button" className="btn btn-secondary"onClick={handleClick}>Secondary</button>
    </div>
  )
}
