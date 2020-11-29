import React, {useState} from 'react'
import Caption from './Caption'
import Carousel from 'react-bootstrap/Carousel'
import gol from '../images/gameoflife1.png'
import softcard from '../images/softcard.png'
import softcard2 from '../images/softcard2.png'
import crypto from '../images/crypto.png'
import apollo from '../images/apollo.png'
import apollo2 from '../images/apollo2.png'
import github from '../images/githubjobs.png'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div id="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={softcard}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={softcard2}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={apollo}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={apollo2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={github}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={crypto}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gol}
            alt="Forth slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <Caption index={index} />

      </div>
    );
  }
  
export default ControlledCarousel;
