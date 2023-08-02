import React, { Component } from 'react'
import { AgeConsumer, UserCosumer } from './ReactContext'

export class C extends Component {
  render() {
    return (
      <div>
        <UserCosumer>
            {/* Multiple Context */}
            {name=>(<AgeConsumer>
                {age=>{return(<h1>Name is {name} and age is {age}</h1>)}}  
            </AgeConsumer>)}
           
                {/* {(name)=>{
                    return(<h1>This name "{name}" came from A.js to C.js</h1>)
                }}  */}
            
        </UserCosumer>
      </div>
    )
  }
}

export default C
