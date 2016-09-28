import React from 'react';
import ReactDOM from 'react-dom';
import PropertyDescriptionAnnotator from './property-description-annotator.js';

const pacmanFE = () => {
  // todo: also use a better div className
  $(document).on('click', '#readAdData', event => {
    const entryPoint = document.querySelector('.fe-co-pacman-fe-entry-point');
    if(entryPoint) {
      ReactDOM.render(
        <PropertyDescriptionAnnotator />,
        entryPoint
      );
    }
  });
};

export default pacmanFE;
