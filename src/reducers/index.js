import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import CompareProducts from "./CompareProducts";


export default combineReducers({
    auth,
    message,
    CompareProducts
});
