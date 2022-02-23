import React, { Component } from 'react'

class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="userCpf">
          CPF:
          <input
            id="userCpf"
            type="text"
            name='cpf'
            value={ value }
            maxLength={11}
            onChange={ handleChange }
            required
          />
        </label>
      </div>
    )
  }
}

export default Cpf;
