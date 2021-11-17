import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="https://www.anthology-us.com/assets/images/banner-img1.jpg" alt="banner1" />
        <button className="legend">Legend 1</button>

      </div>
      <div>
        <img src="https://www.anthology-us.com/assets/images/banner-img2.jpg" alt="banner2" />
        <button className="legend">Legend 2</button>

      </div>
      <div>
        <img src="https://www.anthology-us.com/assets/images/banner-img3.jpg" alt="banner3" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 3</button>
      </div>
      <div>
        <img src="https://www.anthology-us.com/assets/images/banner-img4.jpg" alt="banner4" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 4</button>
      </div>
      <div>
        <img src="https://www.anthology-us.com/assets/images/banner-img5.jpg" alt="banner5" />
        <p>Most platforms place little value on you and your time, pay you peanuts, and take you for granted. Feel recognized. Feel prioritized. Feel supported. Get Anthology today.</p>
        <button className="legend">Legend 5</button>
      </div>
    </Carousel>
  );
}

export default App;

