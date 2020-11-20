import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';

export default function Home() {
    return (
        <div className="homeComponent" id="home">
            <div className='Navbar'>
									
            <div className="navItem">
            <Link
            activeClass='active'
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            className='nav-Link'>
                Home
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
	);
};
