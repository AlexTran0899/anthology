import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="https://picsum.photos/200/300" />
        <button className="legend">Legend 3</button>

      </div>
      <div>
        <img src="https://picsum.photos/200/300" />
        <button className="legend">Legend 3</button>

      </div>
      <div>
        <img src="https://picsum.photos/200/300" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 3</button>
      </div>
    </Carousel>
  );
}

export default App;
