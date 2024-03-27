import React, { useEffect, useState } from 'react';
import './Login.css';
import { Avatar, Typography, TextField, Stack, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLoginDetails, checkLoginSessionIsActive} from '../../common/store/actions/loginActions';
import { createSession } from '../../common/services/loginService';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const dispatch = useDispatch();
    const responseFromStore = useSelector(state => state.loginStore); //Getting response from store post form submission
    const navigate = useNavigate();

    useEffect(() => {
        if(responseFromStore.requestMade){
           if(responseFromStore.response.data){ //If login was successful, new session is created and user is directed to Main page, i.e. Products page
             createSession(responseFromStore);
             navigate('/products');
           }
           else{ 
              alert("Login failed due to invalid credentials or server error");
              console.log(responseFromStore);
           }
        }
    }, [responseFromStore]);

    useEffect(()=>{
        dispatch(checkLoginSessionIsActive());
    },[dispatch]);
  
      useEffect(()=>{
        if(responseFromStore.sessionIsActive === true){
          navigate('/products');
        }
      },[responseFromStore.sessionIsActive]);

    const handleLogin = () =>{ //Client side input validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Matching the email state with regex for email validation

        if(!emailRegex.test(email)) {
           alert('Please enter a valid email address');
           return; // Prevent form submission if email is invalid
        }

        if(password.length === 0){
           alert('Please enter the password to proceed!');
           return; // Prevent form submission if password is invalid
        }

        dispatch(addLoginDetails(email,password)); //Setting the redux store values based on response from backend 
    }


    return(
        <>
        <Stack useFlexGap minHeight={"90vh"} direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
        <Avatar sx={{bgcolor : pink[500]}} >
            <LockOutlinedIcon color="inherit"></LockOutlinedIcon>
        </Avatar>
        <Typography sx={{ marginTop : 1 }} variant='h6'>Sign in</Typography>
        <TextField sx={{ marginTop : 2, width : 1/4 }} onChange={(e)=>setEmail(e.target.value)} type='email' label="Email Address" value={email} variant="outlined" required/> 
        <TextField sx={{ marginTop : 2, width : 1/4 }} onChange={(e)=>setPassword(e.target.value)} type='password' label="Password" value={password} variant="outlined" autoComplete='off' required/>
        
        <Button onClick={handleLogin} variant="contained" sx={{backgroundColor : '#3f51b5', marginTop : 2, width : 1/4}}> SIGN IN </Button>
        {/* Login button */}

        <div style={{marginTop : "16px", textAlign: 'left', width : '25%'}}>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
        <Typography sx={{ marginTop : 20 }} variant='body2'>Copyright ©️ Upgrad 2024</Typography>
        </Stack>
        </>
    );
};

export default Login;