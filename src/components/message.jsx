import React from 'react';

const Message = (props) => {
  const { user, content } = props.message;
  return (
    <div>
      <div>
        <h5>{user}</h5>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
