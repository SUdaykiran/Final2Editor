import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    
constructor(props) {
  super(props)

  this.state = {
        hasError:false
     
  }
}
static getDerivedStateFromError(Error){
    return{
        hasError : true
    } 
}

componentDidCatch(Error,info){
    console.log(Error);
    console.log(info);
}
render() {
    let ui;
    if(this.state.hasError){
        ui = <h1>Something Went Wrong</h1>
    }else{
        ui = <h1>{this.props.children}</h1>
    }
    
    return (
      <div>
        {ui}
      </div>
    )
  }
}

export default ErrorBoundary
