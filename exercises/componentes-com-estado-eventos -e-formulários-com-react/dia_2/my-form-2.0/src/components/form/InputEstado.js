import React, { Component } from 'react'
import brazilStates from './DataStates';


class InputEstado extends Component {
  render() {
    const { value , onChange } = this.props
    return (
      <label>
        Estados:
        <select
          name="estado"
          value = { value }
          onChange = { onChange }
        >
          {brazilStates.map((state) => 
            <option key={ state } >{ state }</option>
          )}
        </select>
      </label>
    );
  };
};

export default InputEstado;