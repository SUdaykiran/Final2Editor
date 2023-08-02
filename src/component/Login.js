import React from "react";
import { useState } from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const auth=useAuth()
    const navigate = useNavigate()
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [lis,setLis] = useState(true)
    const change =(event)=>{
        setUser(event.target.value)
    }
    const changepass=(event)=>{
        setPassword(event.target.value)
    }
    const handlelogin=(event)=>{
        auth.userlist.map(x=>{
            if(x.username == user && x.password == password){
                auth.login(user)
                navigate('/loginsuccess')
                setLis(true)
            }else{
                setLis(false)
            }
        })
        event.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handlelogin}>
            <label>
                User Name
            </label>
            <input type="text" value={user} onChange={change} required/><br></br>
            <label>
                Password           
            </label>
            <input type="password" value={password} onChange={changepass} required/><br></br>
            <button type="submit">Login</button>
            </form>
            {!lis ? <p>Invalid Username and Password</p>:''}
            <h3>If you do not have an account</h3>
            <a href="/signup">
                Sign Up
            </a>
           
        </div>
    )
}
export default Login