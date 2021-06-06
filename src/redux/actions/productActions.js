import axios from "axios"
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = async () => {
    const response = await axios.get("/products");
    console.log('ini respon di actions', response);
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: response, 
    }
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products, 
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product, 
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}