import React, { Component } from "react";

class Age extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined
    if (value > 99) error = 'Você é uma vampiro?'

    return (
      <div>
        <label htmlFor='userAge'>
          Idade:
          <input
            id="userAge"
            type='number'
            name="age"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <span>
          {error ? error : ''}
        </span>
      </div>
    )
  }
}

export default Age;
