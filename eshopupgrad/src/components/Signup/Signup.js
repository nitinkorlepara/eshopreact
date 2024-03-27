import React, {useEffect, useState} from 'react';
import { Avatar, Typography, TextField, Stack, Button, FormControl, MenuItem, Select} from "@mui/material";
import { pink } from "@mui/material/colors";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { signNewUserToApp } from '../../common/services/signupService';

const Signup = () => {
    const userRoles = [
        {text : "Administrator", value : "admin"},
        {text : "User", value : "user"},
      ]; 

      const [userRoleValue, setUserRoleValue] = useState("");
      const [cnfPassword, setConfirmPasswordVal] = useState("");
      const [userInputs,setUserInputs] = useState({
        "email": "",
        "password": "",
        "firstName": "",
        "lastName": "",
        "contactNumber": "",
        "role": []
      });

      useEffect(()=>{
        setUserInputs({...userInputs, role : [`${userRoleValue}`]})
      },[userRoleValue]);

      const StyledArrow = styled(KeyboardArrowDownIcon)({
        borderLeft: '1px solid gray', // Add left border to the icon
        paddingLeft: '8px', // Adjust padding for the icon
      });

      const handleSignupNewUser = () => { //User input validations post signup request 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Matching the email state with regex for email validation
        const contactNumberRegex = /^\d{8,15}$/;

        if(userInputs.firstName.length < 1 || userInputs.firstName.length > 25){
            alert('First name length should be between 1-25 characters.');
            return; // Prevent form submission if password is invalid
        }

        if(userInputs.lastName.length < 1 || userInputs.lastName.length > 25){
            alert('Last name length should be between 1-25 characters.');
            return; // Prevent form submission if password is invalid
        }

        if(!emailRegex.test(userInputs.email)) {
           alert('Please enter a valid email address');
           return; // Prevent form submission if email is invalid
        }

        if(userInputs.password.length < 6 || userInputs.password.length > 40){
            alert('Password length should be between 6-40 characters.');
            return; // Prevent form submission if password is invalid
        }

        if(userInputs.password !== cnfPassword){
            alert("Confirm password value doesn't matches with password value"); 
            return; // Prevent form submission if confirm password value is invalid
        }

        if(!contactNumberRegex.test(userInputs.contactNumber)){
            alert('Please enter a valid contact number between length 8-15');
            return;
        }

        if(userRoleValue.length === 0){
            alert('Please select a user role');
            return;
        }

        signNewUserToApp(userInputs).then((response)=>{
            console.log(response);
            window.location.reload();
        }).catch((error)=>{
            console.log(error);
        });

      };
    
    return(
        <>
        <Stack useFlexGap minHeight={"100vh"} className='' direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
        <Avatar sx={{bgcolor : pink[500]}} >
            <LockOutlinedIcon color="inherit"></LockOutlinedIcon>
        </Avatar>
        <Typography sx={{ marginTop : 1 }} variant='h6'>Sign up</Typography>
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setUserInputs({...userInputs, firstName : e.target.value})} value={userInputs.firstName} label="First Name" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setUserInputs({...userInputs, lastName : e.target.value})} value={userInputs.lastName} label="Last Name" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setUserInputs({...userInputs, email : e.target.value})} value={userInputs.email} label="Email Address" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setUserInputs({...userInputs, password : e.target.value})} value={userInputs.password} label="Password" variant="outlined" autoComplete='off' required/>
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setConfirmPasswordVal(e.target.value)} value={cnfPassword} label="Confirm Password" variant="outlined" autoComplete='off' required/>
        <TextField sx={{ marginTop : 1, width : 1/4 }} onChange={(e)=>setUserInputs({...userInputs, contactNumber : e.target.value})} value={userInputs.contactNumber} label="Contact Number" variant="outlined" autoComplete='on' required/> 
        <FormControl sx={{width: 1/4, mt :  1}}>
        <Select
          id="user-role"
          size="small"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ color: "gray" }}>Select User Role (Added for easy testing) *</span>;
            } else {
              return userRoles.find((item) => item.value === selected).text;
            }
          }}
          displayEmpty
          IconComponent={StyledArrow}
          sx={{
            width: '100%',
            "& .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the default icon
            },
            "&:hover .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the icon on hover
            },
          }}
          value={userRoleValue}
          onChange={(e) => setUserRoleValue(e.target.value)}
        >
          {userRoles.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <Button onClick={handleSignupNewUser} variant="contained" sx={{backgroundColor : '#3f51b5', marginTop : 2, width : 1/4}}> SIGN UP </Button>
        <div style={{marginTop : "16px", textAlign: 'end', width : '25%'}}>
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
        <Typography sx={{ marginTop : 5 }} variant='body2'>Copyright ©️ Upgrad 2024</Typography>
        </Stack>
        </>
    );
};

export default Signup;