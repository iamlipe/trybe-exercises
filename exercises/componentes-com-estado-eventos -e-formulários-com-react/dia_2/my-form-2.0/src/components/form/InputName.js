import React, { Component } from 'react'

class InputName extends Component {
  render() {
    const { value , onChange } = this.props

    return (
      <label>
        Name:
        <input className="name-upper"
          type="text" 
          name="name"
          maxLength='40'
          required
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  };
};

export default InputName;