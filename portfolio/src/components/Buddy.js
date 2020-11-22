import React from 'react'
import "../styles/css/Buddy.css"
import partyhat from "../images/partyhat.svg"
import roboteye from "../images/roboteye.svg"

const Buddy = () => {
    return (
        <div id="BuddyComponent">
            
            <img style={{width: "100px", boxShadowBottom: "20px black"}} alt="party hat" src={partyhat}></img>
            <div className="Buddy">  

                <div id="Buddy">

                <img id="robotEye" alt="eyeball" src={roboteye}></img>

                <div id="face">
                <div id="teeth"></div>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Buddy