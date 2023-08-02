import React from 'react'
import { useParams } from 'react-router-dom'

function UserDet() {
    const params = useParams()
    const id = params.userid
  return (
    <div>
      Details of the User {id}
    </div>
  )
}

export default UserDet
// Dynamic Routing

