import React from 'react';
import { Avatar, Typography, TextField, Stack, Button} from "@mui/material";
import { pink } from "@mui/material/colors";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

const Signup = () => {
    return(
        <>
        <Stack useFlexGap minHeight={"92vh"} className='' direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
        <Avatar sx={{bgcolor : pink[500]}} >
            <LockOutlinedIcon color="inherit"></LockOutlinedIcon>
        </Avatar>
        <Typography sx={{ marginTop : 1 }} variant='h6'>Sign up</Typography>
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="First Name" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="Last Name" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="Email Address" variant="outlined" autoComplete='on' required/> 
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="Password" variant="outlined" autoComplete='off' required/>
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="Confirm Password" variant="outlined" autoComplete='off' required/>
        <TextField sx={{ marginTop : 1, width : 1/4 }} label="Contact Number" variant="outlined" autoComplete='on' required/> 
        <Button variant="contained" sx={{backgroundColor : '#3f51b5', marginTop : 2, width : 1/4}}> SIGN UP </Button>
        <div style={{marginTop : "16px", textAlign: 'end', width : '25%'}}>
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
        <Typography sx={{ marginTop : 5 }} variant='body2'>Copyright ©️ Upgrad 2024</Typography>
        </Stack>
        </>
    );
};

export default Signup;