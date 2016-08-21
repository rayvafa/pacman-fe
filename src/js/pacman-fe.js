import React from 'react';
import ReactDOM from 'react-dom';
import PropertyDescriptionAnnotator from './property-description-annotator.js';

const pacmanFE = _ => {
  var entryPoint = document.querySelector('.fe-co-pacman-fe-entry-point');
  ReactDOM.render(
    <PropertyDescriptionAnnotator/>,
    entryPoint
  );
};

export default pacmanFE;
