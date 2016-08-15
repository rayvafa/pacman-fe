import PacmanFe from './pacman-fe.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { FEATURE_LIST, isFeatureEnabled } from './modules/feature-flag';

console.log('Pacman-fe is here!');

var entryPoint = document.querySelector('.fe-co-pacman-fe-entry-point');

if (isFeatureEnabled(FEATURE_LIST.PACMAN_FE)) {
  ReactDOM.render(
    <PacmanFe/>,
    entryPoint
  );
} else {
  console.log('Pacman-fe is disabled!');
}
