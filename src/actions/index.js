export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}
