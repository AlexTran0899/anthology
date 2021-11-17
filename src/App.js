import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="./images/banner-img1.jpeg" alt="banner1" />
        <button className="legend">Legend 3</button>

      </div>
      <div>
        <img src="./images/banner-img2.jpeg" alt="banner2" />
        <button className="legend">Legend 3</button>

      </div>
      <div>
        <img src="./images/banner-img3.jpeg" alt="banner3" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 3</button>
      </div>
      <div>
        <img src="./images/banner-img4.jpeg" alt="banner4" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 3</button>
      </div>
      <div>
        <img src="./images/banner-img5.jpeg" alt="banner5" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 3</button>
      </div>
    </Carousel>
  );
}

export default App;

