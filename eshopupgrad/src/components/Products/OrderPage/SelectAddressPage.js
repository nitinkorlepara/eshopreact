import React from "react";
import { FormControl, FormHelperText ,MenuItem, Select, Typography, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../../TimedMessageBox/MessageBox";

const SelectAddressPage = ({ addresses, setStep }) => {
  const [addressValue, setAddressValue] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  
  const StyledArrow = styled(KeyboardArrowDownIcon)({
    borderLeft: '1px solid gray', // Add left border to the icon
    paddingLeft: '8px', // Adjust padding for the icon
  });

  const handleNextStep = () => { //Function to take the user to Confirm Order Page(Step 3)
    // ... set address state in redux store here ... 
    if(addressValue.length !== 0) setStep(2);
    else console.log('Please Select a address');
  }

  const handleReturnToItems = () => { //Function to return to Product Page
    navigate(`/products/${id}`);
  }

  const[messageBoxState, setShowMessage] = useState(false);

  const handleOpenBox = () => { //Needs to be created to switch the message box state to first show it and after an interval hide it
    setShowMessage(true);
    setTimeout(()=>{
      setShowMessage(false);
    }, 2000);
  }

  return (
    <>
      <FormControl sx={{width: 1/2, mt :  4}}>
        <FormHelperText sx={{ marginLeft: 0, color: "black" }}>
          Select Address
        </FormHelperText>
        <Select
          id="sort-value"
          size="small"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ color: "gray" }}>Select...</span>;
            } else {
              return addresses.find((item) => item.value === selected).text;
            }
          }}
          displayEmpty
          IconComponent={StyledArrow}
          sx={{
            width: 9/10,
            "& .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the default icon
            },
            "&:hover .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the icon on hover
            },
          }}
          value={addressValue}
          onChange={(e) => setAddressValue(e.target.value)}
        >
          {addresses.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'95vw'}>
          <Typography variant="subtitle1" sx={{ mt: 2 }}> --OR-- </Typography>
          <Typography variant="h6" sx={{ mt: 3}}> Add Address </Typography>
          <TextField sx={{ mt : 2, width : '27vw' }} label="Name" variant="outlined" autoComplete='on' required/>
          <TextField sx={{ mt : 1, width : '27vw' }} label="Contact Number" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} label="Street" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} label="City" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} label="State" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} label="Landmark" variant="outlined" autoComplete='on'/> 
          <TextField sx={{ mt : 1, width : '27vw' }} label="Zip Code" variant="outlined" autoComplete='on' required/>
          
          <Button variant="contained" sx={{backgroundColor : '#3f51b5', marginTop : 2, width : '27vw'}}> SAVE ADDRESS </Button>
          {/* Will Call API to add a new address */}

          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width={'27vw'} margin={'4vh auto 5vh'}>
              <Button variant="text" onClick={handleReturnToItems} sx={{ width : 1/5, color : 'black', backgroundColor : '#EEEEEE'}}> BACK </Button>
              {/* Go Back to Product Page */}

              <Button variant="contained" onClick={handleNextStep} sx={{backgroundColor : '#3f51b5', width : 1/5, ml : 2}}> NEXT </Button>
              {/* Proceed to Confirm Order Page */}

              <Button variant="contained" onClick={handleOpenBox} sx={{backgroundColor : '#3f51b5', width : 1/5, ml : 2}}> Check Dialog </Button>
              {/* Button for testing the message box functionality */}
              <MessageBox messageState={messageBoxState} message={'Please select address!'} bgcolor={'blue'}/>
          </Stack>

      </Stack>   
    </>
  );
};

export default SelectAddressPage;
