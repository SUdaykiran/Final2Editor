
import { useNavigate } from 'react-router-dom'

import React from 'react'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={()=>navigate("order",{replace:true})}>OrderNow</button>
    </div>
  )
}

export default Home

