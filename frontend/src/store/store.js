import {configureStore, combineReducers} from "@reduxjs/toolkit";
import libraries from "./libraries.js";
import currentUser from "./currentUser.js";
import auth from "./auth.js";
import events from "./events.js";
import checkIns from "./checkIn.js";
import profiles from "./profiles.js"

const reducer = combineReducers({libraries, currentUser, auth, events, checkIns, profiles})

export default configureStore({reducer})
