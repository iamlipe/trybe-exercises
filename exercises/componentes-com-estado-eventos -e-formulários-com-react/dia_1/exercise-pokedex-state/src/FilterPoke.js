import React from 'react';


class FilterPoke extends React.Component {
  render() {
    const { type } = this.props
    return <button className={ type } onClick={this.props.filterType}>{ type }</button>
  }
}

export default FilterPoke;