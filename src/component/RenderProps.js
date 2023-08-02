import React, { Component } from 'react'

export class RenderProps extends Component {
  render() {
    return (
      <div>
        {this.props.name(true)}
      </div>
    )
  }
}

export default RenderProps
