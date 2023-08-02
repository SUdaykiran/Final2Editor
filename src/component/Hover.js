import React, { Component } from 'react'
import Counter from './Counter'
export class Hover extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.change}>Hovered{this.props.count} times</button>
      </div>
    )
  }
}

export default Hover
