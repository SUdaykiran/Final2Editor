import React from 'react'
import { useAuth } from './Authentication'
import { Navigate } from 'react-router-dom'
function RequiredAuthentication(props) {
    const auth = useAuth()
    if(!auth.user){
        return <Navigate to="/login"/>
    }
        return props.children
}

export default RequiredAuthentication
