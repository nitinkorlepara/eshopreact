import { fetchCategoriesFromAPI, fetchProductsFromAPI, getProductFromAPI } from "../../services/productService";

export const renderCategories = () => dispatch => {
    fetchCategoriesFromAPI().then((response)=>{
        dispatch({
            type : "INIT_CATEGORIES",
            responseCatService : response
       }) 
    }).catch((response)=>{
        dispatch({
            type : "INIT_CATEGORIES",
            responseCatService : response
       }) 
    });
};

export const renderProducts = () => dispatch =>{
    fetchProductsFromAPI().then((response)=>{
        dispatch({
            type : "INIT_PRODUCTS",
            responseProductService : response
        })
    }).catch((response)=>{
        dispatch({
            type : "INIT_PRODUCTS",
            responseProductService : response
        })
    })
}

export const setProductsView = (searchString) => {
    return{
        type : "SET_PRODUCTS_VIEW",
        searchString
    }
}

export const setActiveProduct = (productID) => dispatch => {
    getProductFromAPI(productID).then((productResponse)=>{
        dispatch({
            type : "SET_ACTIVE_PRODUCT",
            productResponse
        })
    }).catch((productResponse)=>{
        dispatch({
            type : "SET_ACTIVE_PRODUCT",
            productResponse
        })
    })
}