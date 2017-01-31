import axios from 'axios'

//export actions
export const FETCH_MEETUP_EVENT = 'FETCH_MEETUP_EVENT'

export function fetchNextMeetupEvent(){

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