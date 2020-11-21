import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <div className="homeComponent" id="home">
            <div className='Navbar'>

            <div className="select">
            <div className="navItem">
            <Link
            activeClass='active'
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                <h2>Robert M. Gondola</h2>
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                Projects
            </Link>
        </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="mission"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                Mission
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                About
            </Link>
            </div>
        
        <div className="navItem">
        <Link
            activeClass='active'
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                Contact
            </Link>
            </div>
            </div>		
			</div>
            {/* FRONT PAGE */}
            <div className="intro">
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
					
		</div>
            </div>
		</div>
	);
};
