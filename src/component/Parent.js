import React, { Component } from 'react'

export class Parent extends Component {
  render() {
    if(this.props.name==="127"){
        throw new Error("Not a name");
    }
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default Parent
