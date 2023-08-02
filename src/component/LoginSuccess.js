import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
export class LoginSuccess extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         islogged:true
      }
    }
   componentDidMount(){
    setInterval(()=>{this.setState({islogged:false})},2000)
   }
  render() {
    if(this.state.islogged){
    return (
      <div>
        <h1>Logged In Successfully</h1>
        Redirecting to home page.........
      </div>
    )}
      return <Navigate to="/"/>
  }

}

export default LoginSuccess
