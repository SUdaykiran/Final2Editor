import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate = useNavigate()
  return (
    <div>
      Order Confirmed
      <br></br>
      <button onClick={()=>navigate(-1)}>GoBack</button>
    </div>
  )
}

export default Order
