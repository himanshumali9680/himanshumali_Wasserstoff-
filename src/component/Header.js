import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWordpress } from "react-icons/io";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);



const Header = () =>{
    return(
        /** common header **/
        <>
            <div className="navigationbar">
      {/* logo and name  */}
      <div className="logo-name">
        <div className="outer">
        <IoLogoWordpress size="25"/>
        </div>
        {/* title of organization  */}
        <p>WASSERSTOFF</p>
      </div>
      <div className="search-navigationlist">
        <div className="search-box">
          {/* search box  */}
          <input type="search" name="search" id="search" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {/* unordered list  */}
        <ul className="navigationList">
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Analytices">Analytics</Link>
          </li>
        </ul>
      </div>
      {/* users profile  */}
      <div className="profile-main">
      
        <FontAwesomeIcon icon={['fas','fa-user']} />

  
        <FontAwesomeIcon icon={['fas','fa-sliders']}/>
        
      </div>
    </div>

        </>

    )
}

export default Header;
