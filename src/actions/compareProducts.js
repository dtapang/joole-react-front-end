import {UNCHECK_PRODUCT, CHECK_PRODUCT, CLEAR_COMPARE_PRODUCTS} from "./types";

export const checkProduct = (product) => (dispatch) => {
    return dispatch({
        type: CHECK_PRODUCT,
        payload: product,
    });
}

export const clearCompareSet  = () => {
    return ({
        type: CLEAR_COMPARE_PRODUCTS
    });
}

export const uncheckProduct = (product) => (dispatch) => {
    return dispatch({
        type: UNCHECK_PRODUCT,
        payload: product,
    });
}
