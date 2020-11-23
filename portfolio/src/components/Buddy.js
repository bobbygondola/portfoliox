import React from 'react'
import "../styles/css/Buddy.css"
import SpeechCarousel from "./SpeechCarousel"
import partyhat from "../images/partyhat.svg"
import alienBuddy from "../images/alienBuddy.svg"

const Buddy = (props) => { 
    return (
        <div id="BuddyComponent">

            <div className="alienFlex">

            <div>
            <img id="partyHat" alt="party hat" src={partyhat}></img>
            </div>
            
            <div className="Buddy"> 
            <img alt="alien" src={alienBuddy}></img>
            </div>

            <div className="speechDiv"> 
            <SpeechCarousel active={props.active} />
            </div>
            
            </div>
        </div>
    )
}
export default Buddy