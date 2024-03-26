import React from 'react';
import CategoriesToggle from './CategoriesToggle';
import { useState } from 'react';
import { Chip, Stack, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const[product] = useState({
        id : 1320,
        name : "Shoes",
        price : "1000",
        description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        imageURL : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
        availableQuantity : 128,
        category : 'accessories'
    });

    const[quantity, setQuantity] = useState("");

    const ImageStyled = styled('img')({
        maxWidth : '30vw',
        maxHeight : '50vh'
    });

    const navigate = useNavigate();

    const handleOrderRedirect = () =>{
        const qty = parseInt(quantity);
        if(qty && qty <= product.availableQuantity){
            navigate(`/products/${product.id}/order`, {
                state : {productQty : qty, productDetails : product}
            });
        } else{
            console.log("Please enter a number with quantity less than available stock.");
        }
    }

    return(
        <>
           <CategoriesToggle/>
           <Stack direction={'row'} spacing={12} minHeight={'70vh'} justifyContent={'center'} alignItems={'center'}>
             <ImageStyled src={product.imageURL} alt='image'/>
             <Stack>
                <Stack useFlexGap direction={'row'}>
                    <Typography variant='h5'>{product.name}</Typography>
                    <Chip label={`Available Quantity : ${product.availableQuantity}`} sx={{backgroundColor : '#3f51b5', color : 'white', ml : 2}}></Chip>
                </Stack>
                <Typography sx={{ mt : 2 }} variant='body2'>Category: <span style={{fontWeight : 'bold'}}> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></Typography>
                <Typography sx={{ maxWidth : '35vw', fontStyle : 'italic', color : '#31304D', mt : 2 }} variant='body2'>{product.description}</Typography>
                <Typography sx={{ mt : 2, color : 'red' }} variant='h6'>₹{product.price}</Typography>
                <TextField sx={{ mt : 4, width : 1/2 }} size='small' value={quantity} onChange={(e)=>setQuantity(e.target.value)} label="Enter Quantity" variant="outlined" autoComplete='off' required/> 
                <Button variant="contained" size='small' onClick={handleOrderRedirect} sx={{backgroundColor : '#3f51b5', marginTop : 2, width : 3/14}}> PLACE ORDER </Button>
             </Stack>
           </Stack>
        </>
    );
};

export default ProductDetails;