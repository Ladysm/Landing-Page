import { Container } from './components/container/container.jsx';
import { Slide } from './components/slide/Slide.jsx';
import { Subscription } from './components/Subscription.jsx';
import { Youtube } from './components/youtube/Youtube';
// Compinente que organiza y renderiza los demàs sub componentes
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
