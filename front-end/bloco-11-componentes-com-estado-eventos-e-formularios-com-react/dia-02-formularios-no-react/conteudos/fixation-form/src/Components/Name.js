import React, { Component } from "react";

class Name extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor='userName'>
          Nome:
          <input
            id="userName"
            type='text'
            name="name"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    )
  }
}

export default Name;
