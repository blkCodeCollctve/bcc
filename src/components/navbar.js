import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
  render(){
    return (
      <div id="nav_bar" className="navbar">
        <ul>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#organizers">Organizers</a></li>
            <li className="dropdown">
              <a id="reflink" className="blockline">Activities</a>
              <div className="dropborder">
                <ul>
                  <li className="dropdown-content"><Link to="/volunteer">Volunteer</Link></li>
                  <li className="dropdown-content"><Link to="/projects">Projects</Link></li>
                  <li className="dropdown-content"><Link to="/gallery">Gallery</Link></li>
                  <li className="dropdown-content"><Link to ="/blogsandtalks">Blogs & Talks</Link></li>
                </ul>
              </div>
            </li>
          <li><a href="#event">Events</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    )
  }
}
