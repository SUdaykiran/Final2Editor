import React, { Component } from 'react'
import HOC from './Hoc'
export class Child1 extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.change}>Hovered {this.props.count} times</button>
      </div>
    )
  }
}

export default HOC(Child1)
