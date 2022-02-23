import React, { Component } from "react";

class File extends Component {
  render() {
    const { fileInput } = this.props
    return (
      <div>
        <p>Caso seja narrador, anexe um arquivo com uma historia que você narrou.</p>
        <label htmlFor="userFile">
          <input
            id="userFile"
            type="file"
            ref={ fileInput }
            name="file"
          />
        </label>
      </div>
    )
  }
}

export default File;
