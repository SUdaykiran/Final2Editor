import React, { Component } from 'react'
const HOC = (Original)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={count:0}
        }
        change=()=>{
            this.setState(prev=>({count:prev.count+1}))
        }
        render(){
            return <Original count={this.state.count} change={this.change}/>
            
        }
    }    
    return NewComponent
    
    
}
export default HOC
