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
    }
}

const captionConfig = {
    zero: {
        caption: "Crypto Tracker",
        desc: "Used for investors to keep track of their investments.",
        tech: "JavaScript | React | CSS"
    },
    first: {
        caption: "Apollo",
        desc: "The Apollo project was made for Product Managers and Supervisors to track employee opinions or progress on their most recent or past projects.",
        tech: "JavaScript | Okta Auth | React | CSS | Node | Express | PostgreSQL | Docker | AWS"
    },
    second: {
        caption: "Apollo Functionality",
        desc: "Various modes.",
        tech: "JavaScript | Okta Auth | React | CSS | Node | Express | PostgreSQL | Docker | AWS"
    },
    third: {
        caption: "Github Jobs",
        desc: "Pulling data from the Github API, We display available jobs with responsive search results based on search queries.",
        tech: "JavaScript | React | CSS | Github API "
    },
    forth: {
        caption: "Algorithm Visualiser",
        desc: "Based off Conways Game of Life algorithm describing self replicating robots used for human benefit.",
        tech: "JavaScript, Python"
    },
    fifth: {
        caption: "Crypto Tracker",
        desc: "Used for investors to keep track of their investments.",
        tech: "JavaScript | React | CSS"
    }
}

const Caption = (props) => {
    const idx = getIndex(props.index)
    const {caption, desc, tech} = captionConfig[idx] //{caption, desc, tech}

    return (
      <div className="realCaptions">
        <h2>{caption}</h2>
        <h3>{desc}</h3>
        <h4><span style={{color: "#ff4a57", fontWeight: "500"}}>Technologies: </span>{tech}</h4>
      </div>  
    )
}
export default Caption;