import React from 'react';

const Message = (props) => {
  const { created_at, username, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div>
      <div>
        <h5>{username}</h5>
        <p>{time}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
