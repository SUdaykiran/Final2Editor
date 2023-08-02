import React, { Component } from 'react'

export class Click extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.change}>Clicked{this.props.count} times</button>
      </div>
    )
  }
}

export default Click
