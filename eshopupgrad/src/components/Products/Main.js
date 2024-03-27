import React, { useEffect, useState } from "react";
import CategoriesToggle from "./CategoriesToggle";
import DisplayCard from "./DisplayCard";
import ProductSort from "./ProductSort";
import { useLocation, useNavigate } from "react-router-dom";
import MessageBox from "../TimedMessageBox/MessageBox";
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { checkLoginSessionIsActive } from "../../common/store/actions/loginActions";
import { Box, Stack } from "@mui/material";
import { renderCategories, renderProducts } from "../../common/store/actions/productActions";

const Main = ({user}) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkLoggedIn = useSelector(state => state.loginStore);
    const pdtStore = useSelector(state => state.productStore);

    const[messageBoxState, setShowMessage] = useState(false); //For displaying feedback when redirected from order page
    const[productCatalogue, setProductCatalogue] = useState([]); //Conatins the product data to be displayed on main page
    const[refreshCat, setRefreshCat] = useState(false);

    const[messageDetails, setMessageDetails] = useState({
      messageText : '',
      messageColor : ''
    });
    
    const[activeCategory, setActiveCategory] = useState("all");

    useEffect(()=>{
      dispatch(checkLoginSessionIsActive());
      dispatch(renderCategories());
      dispatch(renderProducts());
    },[dispatch]);

    useEffect(()=>{
      if(checkLoggedIn.sessionIsActive === false){
        navigate('/login');
      }
    },[checkLoggedIn.sessionIsActive]);

    const handleOpenBox = () => { //Needs to be created to switch the message box state to first show it and after an interval hide it
        setShowMessage(true);
        setTimeout(()=>{
          setShowMessage(false);
        }, 2000);
    }


    useEffect(()=>{ //Set the products catalogue on the value of searched query
      setProductCatalogue(pdtStore.productsView);
    },[pdtStore.productsView, activeCategory]);

    useEffect(()=>{ //For displaying the product catalogue when when category filter is applied
      if(activeCategory === 'all'){
        setProductCatalogue(pdtStore.productsView);
      } else{
        let newCatArr = pdtStore.productsView.filter((item)=>{
          if(item.category === activeCategory) return item;
        });
        setProductCatalogue(newCatArr);
      }
    },[activeCategory]);

    useEffect(()=>{
      setProductCatalogue(productCatalogue);
    },[refreshCat]);

    useEffect(()=>{
      console.log(location.state); 
      if(location.state){
        setMessageDetails({...messageDetails, messageText : location.state.message, messageColor : location.state.color});
        handleOpenBox(); //If the redirect is from order page a feedback will be shown for placed order
      }
    },[location.state]);

    return(
        <>
          <CategoriesToggle setCategory={setActiveCategory} data={pdtStore.responseCategories.data}/>
          <ProductSort pdtCat={productCatalogue} setProductCatalogue={setProductCatalogue} refreshCat ={refreshCat} setRefreshCat={setRefreshCat}/>
          <Grid sx={{padding : '0vh 3vw 5vh 10vw'}} justifyContent={'center'} container>
          {
            (productCatalogue) 
             ? productCatalogue.map((product,index)=>
              <Grid item md={4} key={index}>
                   <DisplayCard user={user} key={product.id} productData={product}/>
              </Grid>)
             :<></>
          }
          </Grid>
          <MessageBox messageState={messageBoxState} message={messageDetails.messageText} bgcolor={messageDetails.messageColor}/>
        </>
    )
}

export default Main;