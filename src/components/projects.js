import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'


class Projects extends Component {

  componentWillMount(){
    this.props.fetchProjects()
  }

renderProjects(){
  if(!this.props.projects){
    return (
      <li> Nothing</li>
    )
  } else {
    return this.props.projects.map((project)=> {
      return (
        <li className="list-group-item" key={project.id}>
          {project.forks_url}
        </li>
      )
    })
  }
}


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            {this.renderProjects()}
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state){
  return { projects: state.projects.projects };
}

export default connect(mapStatetoProps, { fetchProjects })(Projects);
