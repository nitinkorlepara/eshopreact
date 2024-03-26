import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import {Route, Routes, useLocation} from "react-router-dom";
import Signup from '../Signup/Signup';
import NavigationBar from '../Navbar/NavigationBar';
import Main from '../Products/Main';
import ProductDetails from '../Products/ProductDetails';
import OrderPage from '../Products/OrderPage/OrderPage';

function App() {
  // const allusers = useSelector(state => state.users);
  const location = useLocation();
  const [navparam, setNavParam] = useState();
  const [userRole] = useState("user");

  useEffect(()=>{
    if(location.pathname === "/login") setNavParam("login");
    else if(location.pathname === "/signup") setNavParam("signup");
    else{
      setNavParam("logged");
    }
  },[location.pathname]);

  return (
    <>
    <NavigationBar page={navparam} user={userRole}/>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path='products' element={<Main/>}/>
        <Route path='products/:id' element={<ProductDetails/>}/>
        <Route path='products/:id/order' element={<OrderPage/>}/>
      </Routes>
    </>
  );
}

export default App;
