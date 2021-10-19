import React, {useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import {  finalAnim } from "./assets/animate.js"
import './style.css'

const Header = () => {
    let animHeader  = useRef(null)



    useEffect(() => {
        finalAnim(animHeader) 
    }, [])

    let toloc = (id) => {
        window.location.hash = id
    }

    return (
        <header className="animHeader" ref={(el) => (animHeader = el)} >
            <NavLink exact to="/" activeClassName="current" onClick={() => toloc("homesect")}>
            <div class="logo">
                <svg id='logo' class=" h-10 ml-2 mb-1" viewBox="0 0 1936 1935" >
                    <path fillRule="evenodd" d="M1570.9,952.7c112.9-37.1,225.8-74.1,338.7-111.2c-16.7-43.8-261.7,25.6-304.1,37.9
          c-201.7,58.4-386.3,130-566.2,207c-86.9,43-174.5,83-259.6,130.1c-32.6-33.7-125.1-73.7-111.3-145.5
          c29.4-151.9,574.8-492.1,785-488.5c0.8,0.4,1.6,0.8,2.5,1.2c-17.6,88.3-179.7,236-265.8,319.4c2.1,3.2,4.1,6.3,6.2,9.5
          c83.7,16,316.4-192.1,336.3-252c27.6-83.2-22.3-166.6-44.5-212.9c98-66.6,252.2-242.2,96.4-359.6c-27.9-21-71.3-47.5-115-50.9
          c96.2,52.3,155.2,123.4,118.7,204.6c-60,133.3-280.6,139-438.9,184.5c-209.9,60.4-374.1,156-520.5,275.6
          c-71.4,58.3-192,186.3-137.2,318.2c47.4,114.2,192.7,196.8,213.9,231.8c-155.6,59.1-634,344.5-676.2,475.5
          c-14.7,45.7,30,112.4,56.9,133.7c82.4,65.2,271.4,2.6,354.8-23.7c243.9-76.7,722.3-289.3,373.4-574.9c0-0.4,0-0.8,0-1.2
          C1036.8,1128.6,1307.7,1045.3,1570.9,952.7z M109.1,1707.4c123-108,264.7-201.6,409.2-288.6c61.8-35.5,128.6-73.3,190.4-108.8
          C708.4,1439.5,227.5,1685.4,109.1,1707.4z"></path>
                </svg>
            </div> </NavLink>

                <ul class="text-white text-right">
                    <NavLink to="/AboutMe" activeClassName="current" onClick={() => toloc("AboutSect")}>About Me</NavLink>
                    <NavLink to="/TechStack" activeClassName="current" onClick={() => toloc("Techsect")}>Tech Stack</NavLink>
                    <NavLink to="/Portfolio" activeClassName="current" onClick={() => toloc("portfoliosect")}>Portfolio</NavLink>
                    <NavLink to="/Contact" activeClassName="current" onClick={() => toloc("contactsect")}>Contact Me</NavLink>
                </ul>

        </header>

    );
}

export default Header;
