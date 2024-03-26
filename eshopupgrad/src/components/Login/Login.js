import React from 'react';
import './Login.css';
import { Avatar, Typography, TextField, Stack, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <>
        <Stack useFlexGap minHeight={"90vh"} direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
        <Avatar sx={{bgcolor : pink[500]}} >
            <LockOutlinedIcon color="inherit"></LockOutlinedIcon>
        </Avatar>
        <Typography sx={{ marginTop : 1 }} variant='h6'>Sign in</Typography>
        <TextField sx={{ marginTop : 2, width : 1/4 }} label="Email Address" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 2, width : 1/4 }} label="Password" variant="outlined" autoComplete='off' required/>
        <Button variant="contained" sx={{backgroundColor : '#3f51b5', marginTop : 2, width : 1/4}}> SIGN IN </Button>
        <div style={{marginTop : "16px", textAlign: 'left', width : '25%'}}>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
        <Typography sx={{ marginTop : 20 }} variant='body2'>Copyright ©️ Upgrad 2024</Typography>
        </Stack>
        </>
    );
};

export default Login;