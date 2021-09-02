import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  return (
    <div className="message">
      <p>{content}</p>
      <p><strong>{created_at}</strong><br />
        by <strong>{author}</strong></p>
    </div>
  );
};

export default Message;
