import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects'

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  meetup: MeetupsReducer
});

export default rootReducer;
