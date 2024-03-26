import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const DisplayCard = () => {
    const[user] = useState("admin"); 

    const[product] = useState({
        id : 1320,
        name : "Shoes",
        price : "1000",
        description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        imageURL : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    })

    return (
        <Card sx={{width : 300, margin : 10}}>
            <CardMedia 
            sx={{height : 200}} 
            image={product.imageURL}
            title={product.name}/>
            <CardContent>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography gutterBottom variant="h6">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                    ₹{product.price}
                    </Typography>
                </Stack>
                <Typography variant="body2">
                  {product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
            <Link to={`/products/${product.id}`}><Button size="small" variant="contained" sx={{backgroundColor : "#3f51b5"}}>Buy</Button></Link>
                   {
                    user === "admin" ?
                      <div>
                          <IconButton>
                            <EditIcon/>
                          </IconButton>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                      </div>
                     : <></>
                   }
                </CardActions>
        </Card>
    );
};

export default DisplayCard;