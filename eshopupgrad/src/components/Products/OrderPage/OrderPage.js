import { Stack, Box, Stepper, Step, StepLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectAddressPage from "./SelectAddressPage";
import ConfirmOrderPage from "./ConfirmOrderPage";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const[activeStep, setActiveStep] = useState(1);

  const steps = [
    'Items',
    'Select Address',
    'Confirm Order',
  ];

  const colors = {
    active : '#3F51B5',
    inactive : 'gray'
  };

  const addresses = [
    {text : "Lucknow, Uttar Pradesh, India", value : "lucknow"},
    {text : "Nagpur, Maharashtra, India", value : "nagpur"},
    {text : "Shimla, Himachal Pradesh, India", value : "shimla"},
    {text : "Delhi, India", value : "delhi"}
  ]; 

  useEffect(() => {
    if (!location.state)
      navigate("/products"); /*If someone directly tries to access 
        order page without going through actual order placing stage, they are redirected to /products route*/
  });

  //console.log(location.state); //Getting product details from useLocation hook's state (coming from ProductDetails Component) 

  return (
    <>
      <Stack
        direction={"column"}
        minHeight={"100vh"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        useFlexGap>

        <Box sx={{ width: "70vw", mt : 4 }}> {/* Code for Stepper component */}
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel sx={{
                    '& .MuiStepIcon-root': { 
                        color: (index <= activeStep) ? colors.active : colors.inactive, // Customizing the color of the StepIcon
                     },
                }}> {label} </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {
            (activeStep === 1) 
            ? <SelectAddressPage addresses={addresses} setStep={(num) => setActiveStep(num)}/> //Fetch addresses by calling the API
            : <ConfirmOrderPage productInfo={location.state} setStep={(num) => setActiveStep(num)}/>
        }

      </Stack>
    </>
  );
};

export default OrderPage;
