import PacmanFe from './pacman-fe.js';
import React from 'react';
import ReactDom from 'react-dom';

var entryPoint = document.querySelector('.fe-co-pacman-fe-entry-point');

ReactDOM.render(
  <PacmanFe/>,
  entryPoint
);
