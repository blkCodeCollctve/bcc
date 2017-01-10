import React, { Component } from 'react'

//Holds the NavBar
export default class App extends Component {
  render() {
    return (
      <div>
          <div id="nav_bar" className="navbar">
            <ul>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#organizers">Organizers</a></li>
                <li className="dropdown">
                  <a id="reflink" className="blockline">Activities</a>
                  <div className="dropborder">
                    <ul>
                      <li className="dropdown-content"><a href="/pages/volunteer.html">Volunteer</a></li>
                      <li className="dropdown-content"><a href="/pages/projects.html">Projects</a></li>
                      <li className="dropdown-content"><a href="/pages/gallery.html">Gallery</a></li>
                      <li className="dropdown-content"><a href="/pages/talks-blogs.html">Blogs & Talks</a></li>
                    </ul>
                  </div>
                </li>
              <li><a href="#event">Events</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          {this.props.children}
        <div>
    );
  }
}
