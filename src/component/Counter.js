import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    change=()=>{
        this.setState(prev=>({count:prev.count+1}))
    }
    
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.change)}
      </div>
    )
  }
}

export default Counter
