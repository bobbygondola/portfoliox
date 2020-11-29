import React from 'react'

const getIndex = (index) => {

    if (index === 0) {
        return "zero"
    } else if(index === 1){
        return "first"
    } else if(index === 2){
        return "second"
    } else if(index === 3){
        return "third"
    } else if(index === 4){
        return "forth"
    } else if(index === 5){
        return "fifth"
    } else if(index === 6){
        return "sixth"
    }
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const captionConfig = {
    zero: {
        caption: "SoftCard",
        desc: "Landing page for financial company.",
        tech: "JavaScript | React | CSS | MaterialUI",
        demo: "https://soft-card-bus1gv3as.vercel.app/?fbclid=IwAR10aORjS56Qx3UupgySUkoAsEOYyqNwbXNE243Q5xITjcgFZCZA2Ja9Qyw"
    },
    first: {
        caption: "SoftCard",
        desc: "Landing page for financial company more.",
        tech: "JavaScript | React | CSS | MaterialUI",
        demo: "https://soft-card-bus1gv3as.vercel.app/?fbclid=IwAR10aORjS56Qx3UupgySUkoAsEOYyqNwbXNE243Q5xITjcgFZCZA2Ja9Qyw"
    },
    second: {
        caption: "Apollo",
        desc: "The Apollo project was made for Product Managers and Supervisors to track employee opinions or progress on their most recent or past projects.",
        tech: "JavaScript | Okta Auth | React | CSS | Node | Express | PostgreSQL | Docker | AWS",
        demo: "https://c.apollox.dev/login"
    },
    third: {
        caption: "Apollo Functionality",
        desc: "Various modes.",
        tech: "JavaScript | Okta Auth | React | CSS | Node | Express | PostgreSQL | Docker | AWS",
        demo: "https://c.apollox.dev/login"
    },
    forth: {
        caption: "Github Jobs",
        desc: "Pulling data from the Github API, We display available jobs with responsive search results based on search queries.",
        tech: "JavaScript | React | CSS | Github API",
        demo: "https://c.apollox.dev/login"
    },
    fifth: {
        caption: "Crypto Tracker",
        desc: "Used for investors to keep track of their investments.",
        tech: "JavaScript | React | CSS",
        demo: "https://coin-tracker-bq48k3umn.vercel.app/"
    },
    sixth: {
        caption: "Algorithm Visualiser",
        desc: "Based off Conways Game of Life algorithm describing self replicating robots used for human benefit.",
        tech: "JavaScript | Python",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6694586550199623680/"
    }
}

const Caption = (props) => {
    const idx = getIndex(props.index)
    const {caption, desc, tech, demo} = captionConfig[idx] //{caption, desc, tech}

    return (
      <div className="realCaptions">
        <h2>{caption}</h2>
        <h3>{desc}</h3>
        <div style={{display: "flex"}}>
        <h4><span style={{color: "#ff4a57", fontWeight: "500"}}>Technologies: </span>{tech}</h4>
        <h4><button style={{marginLeft: "50%"}} onClick={() => {openInNewTab(demo)}}>Demo</button></h4>
        </div>
      </div>  
    )
}
export default Caption;