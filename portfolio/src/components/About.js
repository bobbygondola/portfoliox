import React from 'react'
import resumePDF from '../assets/RobertGondolaSWE.pdf'
import resume from '../images/rgresume.png'
import "../styles/css/App.css"

const About = () => {
    return (
        <div className="aboutComponent" id="3">
            <div className="aboutFlex">

            <div className="firstColumn">
                <h3>Front-End</h3>
                <p>HTML, CSS, JavaScript, React.JS, Next.JS, Redux, JSON, BootStrap, ReactStrap, MaterialUI, Styling Libraries, Front End Testing Technologies.</p>
                <h3>Back-End</h3>
                <p>JavaScript, Node.js, Express.js, Knex, SQL, PostgreSQL, SQLite, Other Databases, Relational Databases/Tables, Heroku/AWS, Python, JSON, End to End Testing, Unit Testing, Jest, and more.</p>
                <h3>Related</h3>
                <p>Git, Version Control, Github/Repositories, Computer Science, Algorithms & Data Structures, QA Accommodation, and more.</p>
            </div>

            <div className="secondColumn">
                <img alt="resume" src={resume}></img>
            </div>
            
            <a id="aDownload" href={resumePDF} target='_blank' rel='noopener noreferrer'>
            <button id="dlResume">Download Resume</button>
            </a>
            </div>
            
            
        </div>
    )
}

export default About