import React, {useContext,useState} from "react";
const AuthContext= React.createContext(null)
const AuthProvider = (props)=>{
    const [user,setUser] = useState(null)
    
    const [userlist,setUserlist] = useState([{username:'',password:''}])
    const login=(user)=>{
        setUser(user)
       
    }
    const logout=()=>{
        setUser(null)
    }
    const Signup = (user,password) =>{
        setUserlist([...userlist,{username:user,password:password}])
        

    }
    return <AuthContext.Provider value={{user,login,logout,Signup,userlist}}>
        {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export {AuthProvider,useAuth}