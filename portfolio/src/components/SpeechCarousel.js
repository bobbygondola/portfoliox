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
          <p>My name is Crypto, I will guide you through this portfolio. Hurry though, Im missing my birthday party.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>Here we have a list of projects engineered by the author.. Whats his name? Oh.. Robert, I think.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>It seems as if the author has high aspirations. That is good.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>This seems to be an 'About' Section. Seen one.. seen them all.</p>
        </Carousel.Item>

        <Carousel.Item className="car2item">
        <p>Why dont you go ahead and send the author an email so I can get back to my birthday party on Hyperion.</p>
        </Carousel.Item>
      </Carousel>

      </div>
    )
}
export default SpeechCarousel;