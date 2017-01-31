import { FETCH_MEETUP_EVENT } from '../actions/meetup'

const INITIAL_STATE = {meetup_event: null}

export default function (state = INITIAL_STATE, action){
  if (action == null) { return state;}
  switch(action.type){
    case FETCH_MEETUP_EVENT:
      console.log(action.payload[0])
      return { meetup_event: action.payload[0] };
    default:
      return state;
  }
}
