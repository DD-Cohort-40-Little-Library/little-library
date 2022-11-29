import {configureStore, combineReducers} from "@reduxjs/toolkit";
import libraries from "./libraries.js";

const reducer = combineReducers({libraries})

export default configureStore({reducer})
