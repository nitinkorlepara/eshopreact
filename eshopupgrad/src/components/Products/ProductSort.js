import React from "react";
import { FormControl, FormHelperText ,MenuItem, Select } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const ProductSort = () => {
  const [options] = useState([
    {text : "Default", value : "default"},
    {text : "Price: High to Low", value : "hightolow"},
    {text : "Price: Low to High", value : "lowtohigh"},
    {text : "Newest", value : "newest"}
  ]);  

  const [sortValue, setSortValue] = useState("");
  
  const StyledArrow = styled(KeyboardArrowDownIcon)({
    borderLeft: '1px solid gray', // Add left border to the icon
    paddingLeft: '8px', // Adjust padding for the icon
  });
  
  return (
    <>
      <FormControl sx={{display : "block", padding : "0vh 5vw"}}>
      <FormHelperText sx={{marginLeft : 0, color : "black"}}>Sort By:</FormHelperText>
        <Select
          id="sort-value"
          size="small"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{color : "gray"}}>Select...</span>;
            } else{
                return options.find((item)=> item.value === selected).text;
            }
          }}
          displayEmpty
          IconComponent={StyledArrow}
          sx={{width : 1/5, '& .MuiSelect-icon': {
            transform: 'none', // Reset the transformation of the default icon
          },
          '&:hover .MuiSelect-icon': {
            transform: 'none', // Reset the transformation of the icon on hover
          }
          }}
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}>
            {
                options.map((item, index)=>(<MenuItem key={index} value={item.value}>{item.text}</MenuItem>))
            }
        </Select>
      </FormControl>
    </>
  );
};

export default ProductSort;
