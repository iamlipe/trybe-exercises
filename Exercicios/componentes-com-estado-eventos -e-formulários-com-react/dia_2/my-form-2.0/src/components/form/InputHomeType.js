import React, { Component } from 'react'

class InputHomeType extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <div>
        <label>
          <input type="radio" name="home" id="Casa" value={ value } onChange={ onChange } /> Casa
        </label>
        <label>
          <input type="radio" name="home" id="Apartamento" value={ value } onChange={ onChange } /> Apartamento
        </label>
      </div>
    );
  };
};

export default InputHomeType;