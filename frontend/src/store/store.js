import {configureStore, combineReducers} from "@reduxjs/toolkit";
import libraries from "./libraries.js";
import currentUser from "./currentUser.js";
import auth from "./auth.js";
import events from "./events.js";
import checkIns from "./checkIn.js";

const reducer = combineReducers({libraries, currentUser, auth, events, checkIns})
//TODO: Line 8 is missing profiles but kills pages when fixed, work later


export default configureStore({reducer})
