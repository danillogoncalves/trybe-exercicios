import React, { Component } from 'react';

class System extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="userSytem">
          Qual o seu sistema preferido?
          <select
            id="userSytem"
            name="system"
            value={ value }
            onChange={ handleChange }
          >
            <option value="dnd">Dungeons & Dragons</option>
            <option value="wod">World of Darkness</option>
            <option value="gurps">GURPS</option>
          </select>
        </label>
      </div>
    )
  }
}

export default System;
