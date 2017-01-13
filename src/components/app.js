import React, { Component } from 'react'
import NavBar from './navbar'

//Holds the NavBar
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}
