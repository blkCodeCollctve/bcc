import axios from 'axios'
import { getKey } from './utils'

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

export const FETCH_MEETUP_EVENT = 'FETCH_MEETUP_EVENT'

export function fetchNextMeetupEvent(){
  const key = getKey('apikeys.json');
  console.log(key);
  const url = "https://api.meetup.com/Black-Code-Collective/events?&sign=true&photo-host=public&page=20&status=upcoming"
  const request = fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function(result){
    if(result.ok){
      return result.json();
    }
    else {
      return undefined
    }
  });

  
  return {
    type: FETCH_MEETUP_EVENT,
    payload: request
  }
}