import React from 'react';
import ReactDOM from 'react-dom';
import { formatDate, getOrCreateDiv } from './utils';

function Avatar({ avatarUrl, name }) {
  return <img className="Avatar" src={avatarUrl} alt={name} />;
}

function UserInfo(user) {
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}

function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}
const comment = {
  author: 'Daniel',
  text: 'some text',
  date: new Date()
};
ReactDOM.render(
  <div>
    Hello!!!
    <Comment comment={comment} />
  </div>,
  getOrCreateDiv('extractComponent')
);
