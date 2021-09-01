import { FETCH_MESSAGES, SELECT_CHANNEL, MESSAGE_POSTED } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case SELECT_CHANNEL: {
      return []; // check this later
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}
