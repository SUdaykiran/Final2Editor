import React, { Component } from 'react'
import HOC from './Hoc'
export class Parent1 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.change}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default HOC(Parent1)
