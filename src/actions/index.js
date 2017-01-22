import axios from 'axios'

//export actions
export const FETCH_PROJECTS = 'FETCH_PROJECTS'

export function fetchProjects(){

  const url = "https://api.github.com/orgs/blkCodeCollctve/repos"
  var config = {
  headers: {'Accept': 'application/vnd.github.inertia-preview+json'}
  };

  const request = axios.get(url,config)
  console.log(request);
  
  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}
