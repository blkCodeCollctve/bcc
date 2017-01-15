import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './src/components/app'
import Projects from './src/components/projects'
import Gallery from './src/components/gallery'
import Volunteer from './src/components/volunteer'
import BlogsAndTalks from './src/components/blogsandtalks'
import Main from './src/components/main'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/volunteer" component={Volunteer}/>
    <Route path="blogsandtalks" component={BlogsAndTalks}/>
  </Route>
)
