import Axios from "axios";

export const addNewProductService = async (productDetails) => {
    const url = '/api/products';
    const loginToken = sessionStorage.getItem('loginToken');
    const userInfo = {
        headers: {
          'x-auth-token': `${loginToken}`,
          'Content-Type': 'application/json',
        },
    };
    // console.log(productDetails);
    return await Axios.post(url, productDetails,userInfo);
};

export const modifyExistingProductService = async (productDetails) => {
    const url = `/api/products/${productDetails.id}`;
    const loginToken = sessionStorage.getItem('loginToken');
    const userInfo = {
        headers: {
          'x-auth-token': `${loginToken}`,
          'Content-Type': 'application/json',
        },
    };
    // console.log(url+ " "+loginToken);
    return await Axios.put(url, productDetails,userInfo);
};

export const deleteProductService = async (productID) => {
    const url = `/api/products/${productID}`;
    const loginToken = sessionStorage.getItem('loginToken');
    const userInfo = {
          'x-auth-token': `${loginToken}`,
          'Content-Type': 'application/json',
    };

    return await Axios.delete(url, {
        data: {}, // Empty object for data
        headers: userInfo,
    });
};