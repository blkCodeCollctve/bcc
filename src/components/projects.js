import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'
import {getResponse } from '../actions/utils'

import Language from './projects/language'


class Projects extends Component {

//Stats on code history RECENT ACTIVITY https://developer.github.com/v3/repos/statistics/
//filter highest issue, recent activity, languages

  componentWillMount(){
    this.props.fetchProjects()
  }

renderProjects(){
  if(!this.props.projects){
    return (
      <div className="loading">
        <img src="../../assets/images/spinner-large.gif"/>
      </div>
    )
  } else {
    return this.props.projects.map((project)=> {
      return (
        <div className="project-padding">
          <div className="project" key={project.id}>

            <div className="row">
              <div className="project-name">
                <h1>{project.name}</h1>
                <hr/>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h3> Languages: </h3>
                    {/* {project.languages_url} */}
                    <Language/>

                  </div>
                  <div className="col-md-6">
                    <h3> Lines of Code </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3> Description: </h3>
                    {project.description}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                chart will go here
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h3> Contributors: </h3>
                {project.contributors_url}

              </div>
              <div className="col-md-6">
                <button>View Issues {project.open_issues_count}</button>
              </div>
            </div>

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
          <option value="language">Language</option>
        </select>
      </div>

      <div className="filterby">
        <label>Filter By:</label>
        <select>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
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
