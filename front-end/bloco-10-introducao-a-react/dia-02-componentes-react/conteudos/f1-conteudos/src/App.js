import Greeting from './Greeting';
import Image from './Image';
import image from './image.jpg';

function App() {
  return (
    <main>
      <Greeting name='Samuel' lastName='Silva' />
      <Image source={image} alternativeText='Homem de idade avançada com possível origem indiana.' />
    </main>
  );
}

export default App;
