import { AppBar, Box, Button, Typography, Stack, TextField, InputAdornment } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


const NavigationBar = ({page, user}) => {
    return <>
      <Box sx={{flexGrow : 1}}>
        <AppBar position="static" sx={{backgroundColor : "#3f51b5", padding : "16px 28px"}}>
                <Stack useFlexGap justifyContent="space-between" direction="row" alignItems="center">
                    <Stack useFlexGap direction={"row"}>
                        <ShoppingCart/>
                        <Typography variant="body1" sx={{flexGrow : 1, marginLeft : 1}}> upGrad E-Shop </Typography>
                    </Stack>
                    {
                        (page === "login" || page === "signup")
                        ? <></>
                        : <TextField placeholder="Search" hiddenLabel size="small" sx={{backgroundColor : "rgba(255,255,255,0.2)", borderRadius : "5px", width : "25%"}} InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                              <SearchOutlinedIcon sx={{color : "white"}}/>
                            </InputAdornment>
                          ), style : {color: 'white', border : 'none'}
                        }}
                        variant="filled"
                      />
                    }

                    {
                        (page === "login" || page === "signup")
                        ? 
                        <Stack useFlexGap direction="row" spacing={3}>
                          <Link style={{color : "white", fontSize : "0.9rem"}} to="/login">Login</Link>
                          <Link style={{color : "white", fontSize : "0.9rem"}} to="/signup">Sign up</Link>
                        </Stack>
                        : 
                        (user === "admin") ?
                            <Stack useFlexGap direction="row" alignItems="center" spacing={3}> 
                            <Link style={{color : "white", fontSize : "0.9rem"}} to="/products">Home</Link>
                            <Link style={{color : "white", fontSize : "0.9rem"}} to="/addproduct">Add product</Link>
                            <Button variant="contained" color="error">LOGOUT</Button>
                            </Stack> 
                            :
                            <Stack useFlexGap direction="row" alignItems="center" spacing={3}> 
                            <Link style={{color : "white", fontSize : "0.9rem"}} to="/products">Home</Link>
                            <Button variant="contained" color="error">LOGOUT</Button>
                            </Stack> 
                    }
                    
                </Stack>
                
        </AppBar>
      </Box>
    </>
};

export default NavigationBar;