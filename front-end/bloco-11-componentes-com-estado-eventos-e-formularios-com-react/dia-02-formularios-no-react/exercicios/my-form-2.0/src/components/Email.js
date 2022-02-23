import React, { Component } from 'react'

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="userEmail">
          E-mail:
          <input
            id="userEmail"
            type="text"
            name='email'
            value={ value }
            maxLength={50}
            onChange={ handleChange }
            required
          />
        </label>
      </div>
    )
  }
}

export default Email;
