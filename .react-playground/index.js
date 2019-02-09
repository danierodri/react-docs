import React from 'react';
import ReactDom from 'react-dom';
import Playground from 'react-playground-kit';
import * as module from '/Users/danierod/Projects/React/react-docs/src/reactDom.js';

ReactDom.render(
  React.createElement(Playground, { module }),
  document.getElementById('app')
);
