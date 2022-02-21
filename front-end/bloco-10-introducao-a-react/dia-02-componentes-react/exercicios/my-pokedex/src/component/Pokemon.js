import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight:{ value, measurementUnit }, image } = this.props.pokeInfo;
    return (
      <div>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{value} {measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}


Pokemon.propTypes = {
  pokeInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired
  })
};

export default Pokemon;
