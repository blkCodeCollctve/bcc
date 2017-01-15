import axios from 'axios'

//export actions
export const FETCH_PROJECTS = 'FETCH_PROJECTS'

export function fetchProjects(){
  const request = "stuff";

  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}
