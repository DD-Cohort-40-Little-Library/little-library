import {configureStore, combineReducers} from "@reduxjs/toolkit";
import libraries from "./libraries.js";
import currentUser from "./currentUser.js";
import auth from "./auth.js";

const reducer = combineReducers({libraries, currentUser, auth})


export default configureStore({reducer})
