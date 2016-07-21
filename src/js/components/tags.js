import React from 'react';
import { Autocomplete } from '@domain-group/fe-co-autocomplete';

const Tags = React.createClass({

  render() {

    const tagList = [
      {value: 'price', label: 'Price'},
      {value: 'pool', label: 'Pool'}
    ];

    return (
      <div className='tags-wrap'>
        <Autocomplete
          name='tags'
          options={tagList}
          allowCreate={true}
          placeholder='Add tags...'
        />
      </div>
    );
  }
});

export default Tags;
