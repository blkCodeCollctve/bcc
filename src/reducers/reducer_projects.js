import { FETCH_PROJECTS } from '../actions/index'

const INITIAL_STATE = {projects: null}

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_PROJECTS:
      return{...state, projects: action.payload.data};
    default:
      return state; 
  }
}
