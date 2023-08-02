
import './App.css';
import AboutUs from './component/AboutUs';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Servies from './component/Servies';
import NoMatch from './component/NoMatch';
import { Route,Routes } from 'react-router-dom';
import Products from './component/Products';
import New from './component/New';
import Best from './component/Best';
import Order from './component/Order';
import User from './component/User';
import UserDet from './component/UserDet';
import Profile from './component/Profile';
import Login from './component/Login';
import { AuthProvider } from './component/Authentication';
import App1 from './component/MainBody';
import RequiredAuthentication from './component/RequiredAuthentication';
import Signup from './component/Signup';
import LoginSuccess from './component/LoginSuccess';
import SignupSuccess from './component/SignupSuccess';
// import Counter from './component/Counter';
// import Click from './component/Click';
// import Hover from './component/Hover';
// import { UserProvider } from './component/ReactContext';
// import A from './component/A';
// import B from './component/B';
function App() {
  return (
    <div className="App">
      <AuthProvider>
             <Navbar/>
      <Routes>
        <Route path="/" element={<App1/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path="/user" element={<User/>}>
          <Route path=":userid" element={<UserDet/>}></Route>
        </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<RequiredAuthentication><Profile/></RequiredAuthentication>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/loginsuccess' element={<LoginSuccess/>}></Route>
        <Route path='/signupsuccess' element={<SignupSuccess/>}></Route>
      </Routes>
      {/* <UserProvider value="Venu"><A/></UserProvider> */}
      {/* <UserProvider value="20"><B/></UserProvider> */}
      {/* <Counter render={(count,change)=> <Click count={count} change={change}/>}/>
      <Counter render={(count,change)=> <Hover count={count} change={change}/>}/> */}
      </AuthProvider>
      
    </div>
    
      );
}

export default App;
