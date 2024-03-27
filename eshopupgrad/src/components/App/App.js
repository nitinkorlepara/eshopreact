import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import {Route, Routes, Navigate ,useLocation} from "react-router-dom";
import Signup from '../Signup/Signup';
import NavigationBar from '../Navbar/NavigationBar';
import Main from '../Products/Main';
import ProductDetails from '../Products/ProductDetails';
import OrderPage from '../Products/OrderPage/OrderPage';
import AddProduct from '../Products/AddProduct';
import ModifyProduct from '../Products/ModifyProduct';

function App() {
  const loginStore = useSelector(state => state.loginStore);
  const location = useLocation();
  const [navparam, setNavParam] = useState();
  const [userRole, setUserRole] = useState("user");

  useEffect(()=>{
    if(location.pathname === "/login") setNavParam("login");
    else if(location.pathname === "/signup") setNavParam("signup");
    else{
      setNavParam("logged");
    }
  },[location.pathname]);

  useEffect(()=>{
    let userDetails = JSON.parse(sessionStorage.getItem('loginData'));
    if(userDetails){
      if(userDetails.roles.includes('ADMIN')) setUserRole('admin');
      else setUserRole('user');
    }
  });

  return (
    <>
    <NavigationBar page={navparam} user={userRole}/> {/* Rendering navigation bar according to nature of states */}
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/products' element={<Main user={userRole}/>}/>
        <Route path='/products/add' element={<AddProduct/>}/>
        <Route path='/products/modify' element={<ModifyProduct/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/products/:id/order' element={<OrderPage/>}/>
      </Routes>
    </>
  );
}

export default App;
