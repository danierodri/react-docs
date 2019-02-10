import React from 'react';
import ReactDOM from 'react-dom';
import { getOrCreateDiv } from './utils';

const helloWorld = <h1>Hello, world!</h1>;
ReactDOM.render(helloWorld, getOrCreateDiv('element1'));

const element2Name = 'Josh Perez';
const element2 = <h1>Hello, {element2Name}</h1>;

ReactDOM.render(element2, getOrCreateDiv('element2'));

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element3 = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element3, getOrCreateDiv('element3'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, getOrCreateDiv('element4'));
}
setInterval(tick, 1000);

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
const element5 = <Welcome name="Element 5" />;
ReactDOM.render(element5, getOrCreateDiv('element5'));

class WelcomeComponent extends React.PureComponent {
  render() {
    const { name } = this.props;
    return <h1>Hello, {name}</h1>;
  }
}

const element6 = <WelcomeComponent name="Element 6" />;
ReactDOM.render(element6, getOrCreateDiv('element6'));

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <WelcomeComponent name="Cahal" />
    </div>
  );
}
ReactDOM.render(<App />, getOrCreateDiv('element7'));
