import React from 'react';

import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="navbar-lewagon navbar-light navbar">
        <a class="navbar-brand" href="#">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" />
        </a>
      </div>
      <div className="body">
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
