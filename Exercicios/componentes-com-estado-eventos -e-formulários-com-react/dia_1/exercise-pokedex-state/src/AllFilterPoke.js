import React from 'react';


class AllFilterPoke extends React.Component {
  render() {
    return <button onClick={this.props.setFilter} >All</button>
  }
}

export default AllFilterPoke;