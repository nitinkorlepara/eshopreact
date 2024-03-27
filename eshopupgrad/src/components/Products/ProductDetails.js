import React from 'react';
import CategoriesToggle from './CategoriesToggle';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, Stack, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLoginSessionIsActive } from '../../common/store/actions/loginActions';
import { setActiveProduct } from '../../common/store/actions/productActions';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const checkLoggedIn = useSelector(state => state.loginStore);
    const pdtStore = useSelector(state => state.productStore);


    useEffect(()=>{
        if(pdtStore.activeProduct)
        setProductDisplay(pdtStore.activeProduct.data);
    },[pdtStore.activeProduct]);

    useEffect(()=>{
        dispatch(checkLoginSessionIsActive());
      },[dispatch]);
  
      useEffect(()=>{
        if(checkLoggedIn.sessionIsActive === false){
          navigate('/login');
        }
      },[checkLoggedIn.sessionIsActive]);

    const[product, setProductDisplay] = useState(
        {
            "id": "65fd13098bed9306f5cd9229",
            "name": "X-COM RC Heli",
            "category": "toy",
            "price": 2700,
            "description": "RC Helicopter",
            "manufacturer": "X-COM",
            "availableItems": 10,
            "imageUrl": "https://atlas-content-cdn.pixelsquid.com/stock-images/toy-helicopter-AEDWny3-600.jpg"
        }
    );

    const[quantity, setQuantity] = useState("");

    const ImageStyled = styled('img')({
        maxWidth : '30vw',
        maxHeight : '50vh'
    });

    const handleOrderRedirect = () =>{
        const qty = parseInt(quantity);
        if(qty && qty <= product.availableItems && qty > 0){
            navigate(`/products/${product.id}/order`, {
                state : {productQty : qty, productDetails : product}
            });
        } else{
            alert("Please enter a number with quantity less than available stock.");
        }
    }

    return(
        <>
           {
           (product)?
           <Stack direction={'row'} spacing={12} minHeight={'85vh'} justifyContent={'center'} alignItems={'center'}>
             <ImageStyled src={product.imageUrl} alt='image'/>
             <Stack>
                <Stack useFlexGap direction={'row'}>
                    <Typography variant='h5'>{product.name}</Typography>
                    <Chip label={`Available Quantity : ${product.availableItems}`} sx={{backgroundColor : '#3f51b5', color : 'white', ml : 2}}></Chip>
                </Stack>
                <Typography sx={{ mt : 2 }} variant='body2'>Category: <span style={{fontWeight : 'bold'}}> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></Typography>
                <Typography sx={{ maxWidth : '35vw', fontStyle : 'italic', color : '#31304D', mt : 2 }} variant='body2'>{product.description}</Typography>
                <Typography sx={{ mt : 2, color : 'red' }} variant='h6'>₹{product.price}</Typography>
                <TextField sx={{ mt : 4, width : '18rem' }} size='small' value={quantity} onChange={(e)=>setQuantity(e.target.value)} label="Enter Quantity" variant="outlined" autoComplete='off' required/> 
                <Button variant="contained" size='small' onClick={handleOrderRedirect} sx={{backgroundColor : '#3f51b5', marginTop : 2, width : '8rem'}}> PLACE ORDER </Button>
             </Stack>
           </Stack>
           :<></>
           }
        </>
    );
};

export default ProductDetails;