import {configureStore, combineReducers} from "@reduxjs/toolkit";
import libraries from "./libraries.js";
import currentUser from "./currentUser.js";
import auth from "./auth.js";
import events from "./events.js";

const reducer = combineReducers({libraries, currentUser, auth, events})


export default configureStore({reducer})
