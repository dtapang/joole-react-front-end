import {
    CHECK_PRODUCT, CLEAR_COMPARE_PRODUCTS, UNCHECK_PRODUCT
} from "../actions/types";


//const compareSet = state.compareSet;//JSON.parse(localStorage.getItem('compareSet'));
let initialState = [];
/*
if(compareSet){
    initialState = {compareSet};
}else{
    initialState = [];
}
*/

export default function (state = initialState, action) {
    const { type, payload } = action;

    console.log("compareProduct reducer: "+ state);

    let tempArr = [];

    switch (type) {
        case CLEAR_COMPARE_PRODUCTS:
            return {
                ...state,
                compareSet: [],
            };
        case CHECK_PRODUCT:

            tempArr.push(payload);
            if(state.compareSet)
                state.compareSet.map((p)=>tempArr.push(p));

            //localStorage.setItem("compareSet", JSON.stringify(tempArr));

            return {
                ...state,
                compareSet: tempArr,
            };
        case UNCHECK_PRODUCT:

            //if set has values

            //remove the item with the payload's id
            tempArr = state.compareSet.filter(item => item.id !== payload.id)

            //tempArr.delete(payload);
            //localStorage.setItem("compareSet", JSON.stringify(tempArr));
            return {
                ...state,
                compareSet: tempArr,
            };
        default:
            return state;
    }
}
