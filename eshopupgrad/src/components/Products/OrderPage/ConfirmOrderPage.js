import React from 'react';
import { Stack, Button, Paper, Typography } from '@mui/material';

const ConfirmOrderPage = ({setStep, productInfo}) => {

    const {productQty, productDetails} = productInfo;

    const address = {
        name : "Lucknow Home",
        contactNumber : "1234567890",
        street : "Police Line",
        landmark : "Futala Lake",
        city : "Nagpur",
        state : "Maharashtra",
        zipcode : "441901"
    }

    const handleReturnToAddressPage = () =>{
        setStep(1);
    }

    const handlePlaceOrder = () =>{

    };

    console.log('product details : '+ JSON.stringify(productInfo));

    return(
        <>
        <Stack useFlexGap direction={'column'} justifyContent={'center'} alignItems={'center'} width={'95vw'}>

          {/* Order Display Section*/}
          <Stack useFlexGap direction={'row'} justifyContent={'center'} alignItems={'center'} width={'100vw'} mt={'7vh'}>
            {/* Left Side Sub-Section */}
            <Paper elevation={1} sx={{ width : '38vw', height : '50vh', padding : '4vh 2.5vw'}}>
                {/* Displaying Product Details */}
                <Typography variant='h4'>{productDetails.name}</Typography>
                <Typography variant='body2' sx={{mt : 2}}>Quantity: <span style={{fontWeight : 'bold'}}>{productQty}</span></Typography>
                <Typography variant='body2' sx={{mt : 2}}>Category: <span style={{fontWeight : 'bold'}}>{productDetails.category.charAt(0).toUpperCase() + productDetails.category.slice(1)}</span></Typography>
                <Typography variant='subtitle2' sx={{mt : 4, fontStyle : 'italic'}}>{productDetails.description}</Typography>
                <Typography variant='h5' sx={{mt : 4, color : 'red'}}>Total Price : ₹{productDetails.price}</Typography>
            </Paper>

            {/* Right Side Sub-Section */}
            <Paper elevation={1} sx={{ width : '22vw', height : '50vh', ml : '2px', padding : '4vh 2.5vw'}}>
                <Typography variant='h4'>Address Details :</Typography>
                <Typography variant='body2' sx={{mt : 2}}>{address.name}</Typography>
                <Typography variant='body2' sx={{mt : '4px'}}>Contact Number: {address.contactNumber}</Typography>
                <Typography variant='body2' sx={{mt : '4px'}}>{`${address.street},${address.landmark !== "" ? " "+address.landmark+"," : ""} ${address.city}`}</Typography>
                <Typography variant='body2' sx={{mt : '4px'}}>{address.state}</Typography>
                <Typography variant='body2' sx={{mt : '4px'}}>{address.zipcode}</Typography>
            </Paper>
          </Stack>
          

          {/* Action Buttons Section*/}
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width={'27vw'} marginTop={'2vh'}>
              <Button variant="text" onClick={handleReturnToAddressPage} sx={{ width : 1/5, color : 'black', backgroundColor : '#EEEEEE'}}> BACK </Button>
              {/* Go Back to Product Page */}

              <Button variant="contained" onClick={handlePlaceOrder} sx={{backgroundColor : '#3f51b5', width : 1/3, ml : 2}}> PLACE ORDER </Button>
              {/* Proceed to Confirm Order Page */}
          </Stack>

        </Stack>  
        </>
    );
};

export default ConfirmOrderPage;