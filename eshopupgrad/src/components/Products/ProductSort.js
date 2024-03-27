import React, { useEffect } from "react";
import { FormControl, FormHelperText ,MenuItem, Select } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const ProductSort = ({pdtCat, setProductCatalogue, refreshCat, setRefreshCat}) => {
  const [options] = useState([
    {text : "Default", value : "default"},
    {text : "Price: High to Low", value : "hightolow"},
    {text : "Price: Low to High", value : "lowtohigh"},
    {text : "Newest", value : "newest"}
  ]);  

  const [sortValue, setSortValue] = useState("default");
  
  const StyledArrow = styled(KeyboardArrowDownIcon)({
    borderLeft: '1px solid gray', // Add left border to the icon
    paddingLeft: '8px', // Adjust padding for the icon
  });

  const handleSortFilter = (e) =>{
    setSortValue(e.target.value);
  };
  
  useEffect(()=>{
    if(sortValue === 'default'){
      setProductCatalogue(pdtCat.reverse());
      console.log(pdtCat);
    } else if(sortValue === 'newest'){
      setProductCatalogue(pdtCat.reverse());
    } else if(sortValue === 'hightolow'){
      let newPdtSort = pdtCat.sort((a,b)=>b.price - a.price);
      setProductCatalogue(newPdtSort);
    } else if(sortValue === 'lowtohigh'){
      let newPdtSort = pdtCat.sort((a,b)=>a.price - b.price);
      setProductCatalogue(newPdtSort);
    }
    setRefreshCat(!refreshCat);
  },[sortValue]);
  
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
          onChange={handleSortFilter}>
            {
                options.map((item, index)=>(<MenuItem key={index} value={item.value}>{item.text}</MenuItem>))
            }
        </Select>
      </FormControl>
    </>
  );
};

export default ProductSort;
