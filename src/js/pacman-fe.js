import React from 'react';
import ReactDOM from 'react-dom';
import PropertyDescriptionAnnotator from './property-description-annotator.js';

const pacmanFE = () => {
  // todo: this whole thing should only happen after property description is in the page
  // todo: also use a better div className
  const entryPoint = document.querySelector('.fe-co-pacman-fe-entry-point');
  ReactDOM.render(
    <PropertyDescriptionAnnotator />,
    entryPoint
  );
};

export default pacmanFE;
