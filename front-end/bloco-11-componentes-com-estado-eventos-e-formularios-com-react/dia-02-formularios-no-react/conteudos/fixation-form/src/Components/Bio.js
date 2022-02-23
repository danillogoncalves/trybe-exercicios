import React, { Component } from "react";

class Bio extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) error = 'Texto muito grande!'

    return (
      <div>
        <p>Algo sobre você:</p>
        <label htmlFor="userBio">
          <textarea
            id="userBio"
            name="bio"
            value={ value }
            onChange={ handleChange } />
        </label>
        <span>
          {error ? error : ''}
        </span>
      </div>
    )
  }
}

export default Bio
