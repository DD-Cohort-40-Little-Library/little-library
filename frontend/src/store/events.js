import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";
import {setAllCheckIns} from "./checkIn.js";
import _ from "lodash";
import {fetchProfileByProfileId} from "./profiles.js";

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
        const {data} = await httpConfig.get(`/apis/event/`)
        dispatch(setAllEvents(data))
    }
}

export const fetchEventsByProfileId = () => async (dispatch, getState) => {
    const auth = getState().auth
    const {data} = await httpConfig(`/apis/event/`)
    dispatch(setAllEvents(data))
}

export const fetchEventsByLibraryId = (libraryId) => async (dispatch) => {
        const {data} = await httpConfig.get(`/apis/event/eventLibraryId/${libraryId}`)
        dispatch(setAllEvents(data))
        const userIds = _.uniq(_.map(data, "eventProfileId"));
        userIds.forEach(id => dispatch(fetchProfileByProfileId(id)));

}

export const fetchAllEventsForProfileTab = () => async (dispatch, profileId) => {
    const {data} = await httpConfig(`/apis/event/eventProfileId/${profileId})`);
    dispatch(setAllCheckIns(data));
    const userIds = _.uniq(_.map(data, "eventProfileId"));
    userIds.forEach(id => dispatch(fetchProfileByProfileId(id)));
}