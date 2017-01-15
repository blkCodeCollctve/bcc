import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects'

const rootReducer = combineReducers({
  projects: ProjectsReducer
});

export default rootReducer;
