import React, {useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../styles/css/Buddy.css"

    const SpeechCarousel = (props) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      setIndex(props.active)
    }, [props.active])

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div id="carousel2">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        
        <Carousel.Item className="car2item">
          <p>My name is Crypto, I will guide you through this portfolio.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>Here we have a list of projects engineered by Robert.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>It seems as if the author has high aspirations.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>This seems to be an 'About' Section. Download his resume!</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>Why dont you go ahead and send the author an email?</p>
        </Carousel.Item>
      </Carousel>

      </div>
    )
}
export default SpeechCarousel;