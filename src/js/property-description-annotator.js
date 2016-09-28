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
        <div className="form-group shiny-input-container">
          <label className="control-label" htmlFor="selectedText">Selected Description:</label>
          <p>{this.state.selectedText}</p>
          <input name="selectedText" value={this.state.selectedText} type="hidden" />
        </div>
        <div>
          <label className="control-label" htmlFor="selectedTextTags">Related Tags:</label>
          <Tags />
        </div>
      </div>
    );
  },
});

export default PropertyDescriptionAnnotator;
