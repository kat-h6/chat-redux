import React, { Component } from 'react';

import Message from '../components/message';
import { fetchMessages } from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="col-sm-5">
        <div className="channel-title">
          Channel #{this.props.selectedChannel}
        </div>
        <div className="channel-content">
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default MessageList;
