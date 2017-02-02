import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects'
import MeetupsReducer from './reducer_meetups'

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  meetup: MeetupsReducer
});

export default rootReducer;
