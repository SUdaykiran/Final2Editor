import React from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
const Profile =()=>{
    const auth = useAuth()
    const nav=useNavigate()
    const handlelogout =()=>{
        auth.logout()
        nav('/')
    }
    return(
        <div>
            WelcomeUser
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}
export default Profile