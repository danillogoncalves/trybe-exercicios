import React, { Component } from 'react';

class Storyteller extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="userStoryteller">
          Você é narrador?
          <input
            id="userStoryteller"
            type='checkbox'
            name="storyteller"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    )
  }
}

export default Storyteller;
