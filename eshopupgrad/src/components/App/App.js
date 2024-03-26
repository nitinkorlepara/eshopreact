import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import {Route, Routes, useLocation} from "react-router-dom";
import Signup from '../Signup/Signup';
import NavigationBar from '../Navbar/NavigationBar';

function App() {
  // const allusers = useSelector(state => state.users);
  const location = useLocation();
  const [navparam, setNavParam] = useState();

  useEffect(()=>{
    if(location.pathname === "/login") setNavParam("login");
    else if(location.pathname === "/signup") setNavParam("signup");
    else setNavParam("default");
  },[location.pathname]);

  return (
    <>
    <NavigationBar page={navparam}/>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </>
  );
}

export default App;
