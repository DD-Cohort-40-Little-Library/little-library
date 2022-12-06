import {create} from "yup/lib/Lazy.js";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";

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