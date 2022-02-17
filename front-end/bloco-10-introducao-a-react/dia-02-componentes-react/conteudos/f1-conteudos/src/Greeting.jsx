// 1. Via função JavaScript:

// function Greeting(props) {
//   return (<h1>Hello, {props.name}</h1>);
// }

// export default Greeting;

// 2. Via Classe

import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
    <h1>Hello, {this.props.name}, {this.props.lastName}</h1>
    );
  }
}

export default Greeting;
