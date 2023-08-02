import React,{useState} from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
const Signup = ()=>{
    const[user,setUser] = useState('')
    const[password,setPassword] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handleSignup=(event)=>{
        auth.Signup(user,password)
        
        navigate('/signupsuccess')
        event.preventDefault();
    }
    
    const change=(event)=>{
        setUser(event.target.value)
    }  
    const changepass=(event)=>{
        setPassword(event.target.value)
    }

    return(
        <div>
            <form onSubmit={handleSignup}>
            <label>First Name: </label>
            <input/><br></br>
            <label>Last Name: </label>
            <input/><br></br>
            <label>User Name: </label>
            <input type="text" value={user} onChange={change}/><br></br>
            <br></br>
            <label>Password: </label>
            <input type="password" value={password} onChange={changepass}/><br></br>

            <button type="submit">Signup</button>
            </form>
           
        </div>
    )
}
export default Signup
