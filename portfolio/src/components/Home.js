import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/css/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import Buddy from './Buddy'
import signature from '../images/signature.png';

export default function Home() {
    const [active, setActive] = useState(0)    

    const handleSetActive = (to) => {
        setActive(Number(to))
        console.log(to, active)        
    }

    return (
        <div className="homeComponent" id="0">

            <div className='Navbar'>
                
            <div className="select">
            <div className="navItem">
            <Link
            activeClass='active'
            to="0"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'
            onSetActive={handleSetActive}>
                <h2>Robert M. Gondola</h2>
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="1"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'
            onSetActive={handleSetActive}>
                Projects
            </Link>
        </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="2"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'
            onSetActive={handleSetActive}>
                Mission
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="3"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'
            onSetActive={handleSetActive}>
                About
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="4"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'
            onSetActive={handleSetActive}>
                Contact
            </Link>
            </div>
            </div>		
			</div>

            {/* FRONT PAGE */}

            {/* <div id ="tryme"><img style={{marginLeft: "70px"}} src={tryme}></img><img id="uparr" style={{width:"55px", marginLeft: "10px"}} src={arrow}></img></div> */}

            <Buddy active={active} />


            <div className="intro" id="intr">
            <h2 style={{fontSize: "40px"}}>Building Software for the Future</h2>
            <p>Scroll to learn more about my future trajectory</p>
            <div className='Socials'>
                <a
                    href='https://www.linkedin.com/in/robert-gondola-6455781a3/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon className="ion" icon={faLinkedinIn} fixedWidth />
                </a>
                <a
                    href='https://github.com/bobbygondola'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon className="ion" icon={faGithub} fixedWidth />
                </a>
                <a
                    href='https://medium.com/@robertgondolausa'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon className="ion" icon={faMedium} fixedWidth />
                </a>

                <img alt="signature" style={{width: "350px"}} src={signature}></img>
					
		    </div>
            </div>

            
		</div>
	);
};
