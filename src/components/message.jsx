import React from 'react';
import { emojify } from 'react-emojione';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  return (
    <div className="message">
      <p>{emojify(content)}</p>
      <p><strong>{created_at}</strong><br />
        by <strong>{author}</strong></p>
    </div>
  );
};

export default Message;
