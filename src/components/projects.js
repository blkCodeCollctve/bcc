import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'


class Projects extends Component {

//Stats on code history RECENT ACTIVITY https://developer.github.com/v3/repos/statistics/

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
        <div className="project-padding">
          <div className="project">
            <div className="project-name">
              <h1>{project.name}</h1>
              <hr/>
            </div>

            <p className="list-group-item" key={project.id}>
              Description: {project.description}<br/>
              Language: {project.languages_url}<br/>
              Contributors: {project.contributors_url}<br/>
              Open Issues: {project.open_issues_count}<br/>
            </p>
          </div>
        </div>
      )
    })
  }
}

renderFilters (){
  return (
    <div className="select-container">

      <div className="sortby">
        <label>Sort By:</label>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className="filterby">
        <label>Filter By:</label>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  )
}


  render() {
    return (
      <div>
        <div className="project-bg"></div>
        <div className="row project-container">
          <div className="col-md-1">
          </div>
          <div className="col-md-10">
            <div className="project-headline">
              Projects
            </div>
              {this.renderFilters()}
            <div className="fixed-project-container">
            {this.renderProjects()}
            </div>
          </div>
          <div className="col-md-1">
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
