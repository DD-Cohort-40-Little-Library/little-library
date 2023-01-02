import {create} from "yup/lib/Lazy.js";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";
import {setAllLibraries} from "./libraries.js";

const eventsSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        setAllEvents: (events, action) => action.payload
    }
})

export const {setAllEvents} = eventsSlice.actions

export default eventsSlice.reducer

export const fetchAllEvents = () => {
    return async function (dispatch) {
        const {data} = await httpConfig.get("/apis/event/")
        dispatch(setAllEvents(data))
    }
}

export const fetchEventsByProfileId = () => async (dispatch, getState) => {
    const auth = getState().auth
    const {data} = await httpConfig(`/apis/event/eventProfileId/${auth.profileId}`)
    dispatch(setAllEvents(data))
}


// export const fetchEventsByLibraryId = () => async (dispatch, getState) => {
//     const {data} = await httpConfig(`/apis/event/eventLibraryId/${eventLibraryId}`)
//     dispatch(setAllEvents(data))
// }

export const fetchEventsByLibraryId = (libraryId) => async (dispatch) => {
    // return async function (dispatch) {
        const {data} = await httpConfig.get(`/apis/event/eventLibraryId/${libraryId}`)
        dispatch(setAllEvents(data))
    // }
}