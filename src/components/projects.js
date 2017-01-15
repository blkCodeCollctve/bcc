import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'


class Projects extends Component {
  componentWillMount(){
    // this.props.fetchProjects()
  }


  renderProjects(){
    return this.props.projects.map((project)=>{
      return (
        <div>I will get the projects to show eventually</div>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            {this.renderProjects}
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
