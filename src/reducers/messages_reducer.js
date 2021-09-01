import { FETCH_MESSAGES, CHANNEL_SELECTED } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case CHANNEL_SELECTED: {
      return []; // check this later
    }
    default:
      return state;
  }
}
