import React from 'react';
import textSelectListener from './modules/text-select-listener.js';
import Tags from './components/tags.js';

const PropertyDescriptionAnnotator = React.createClass({

  getInitialState() {
    return {
      selectedText: '',
    };
  },

  componentDidMount() {
    textSelectListener(document.getElementById('pendingdescription'), (selectedText) => {
      this.setState({
        selectedText,
      });
    });
  },

  render() {
    return (
      <div>
        <div>Selected text: {this.state.selectedText}</div>
        <Tags />
        <button className="annotator-button">Submit</button>
      </div>
    );
  },
});

export default PropertyDescriptionAnnotator;
