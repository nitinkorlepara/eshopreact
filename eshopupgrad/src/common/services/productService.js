import Axios from "axios";

export const fetchCategoriesFromAPI = async () => {
    const url = '/api/products/categories';
    return await Axios.get(url);
}

export const fetchProductsFromAPI = async () => {
    const url = '/api/products';
    return await Axios.get(url);
}

export const getProductFromAPI = async (productID) => {
    const url = `/api/products/${productID}`;
    return await Axios.get(url);
}