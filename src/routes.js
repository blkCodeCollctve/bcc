import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Projects from './components/projects'
import Gallery from './components/gallery'
import Volunteer from './components/volunteer'
import BlogsAndTalks from './components/blogsandtalks'
import Main from './components/main'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/volunteer" component={Volunteer}/>
    <Route path="blogsandtalks" component={BlogsAndTalks}/>
  </Route>
)
