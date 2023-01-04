import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";
import {setAllLibraries, setInitialLibraries} from "./libraries.js";
import {setAllEvents} from "./events.js";
import {fetchProfileByProfileId} from "./profiles.js";
import _ from "lodash";


const checkInsSlice = createSlice({
	name: "checkins",
	initialState: [],
	reducers: {
		setAllCheckIns: (checkins, action) => {
				return action.payload
			},
		setInitialCheckIns: (checkins, action) => {
			return action.payload
		},
		setInitialCheckInsByCheckInProfileId: (checkins, action) => {
				return action.payload
			}
	}
})

export const {setAllCheckIns, setInitialCheckIns, setInitialCheckInsByCheckInProfileId} = checkInsSlice.actions

export const fetchCheckInsByProfileId = () => async (dispatch, getState) => {
	const auth = getState().auth
	const {data} = await httpConfig(`/apis/check-in/`);
	dispatch(setAllCheckIns(data));
}

export const fetchCheckInsByCheckInProfileId = (id) => async dispatch => {
	const {data} = await httpConfig(`/apis/check-in/checkInProfileId/${id}`)
	dispatch(setInitialCheckInsByCheckInProfileId(data))
}

export const fetchAllCheckInsAndLibraries = () => async (dispatch, getState) => {
	const {data} = await httpConfig(`/apis/library/`)
	dispatch(setInitialLibraries(data))
	const profileIds = _.uniq(_.map(getState().checkIns, "checkInProfileId"))
	profileIds.forEach(id => dispatch(fetchProfileByProfileId(id)))
}

// export const fetchCheckInsByLibraryId = () => async (dispatch, checkInLibraryId) => {
// 	const {data} = await httpConfig(`/apis/check-in/checkInLibraryId/${checkInLibraryId}`);
// 	// const {data} = await httpConfig(`/apis/check-in/checkInLibraryId/${JSON.stringify(checkInLibraryId)}`);
// 	dispatch(setAllCheckIns(data));
// }

export const fetchAllCheckInsForProfileTab = () => async (dispatch, profileId) => {
	const {data} = await httpConfig(`/apis/check-in/checkInProfileId/${profileId})`);
	dispatch(setAllCheckIns(data));
}

export const fetchCheckInsByLibraryId = (libraryId) => async (dispatch) => {
	// return async function (dispatch) {
	const {data} = await httpConfig.get(`/apis/check-in/checkInLibraryId/${libraryId}`)
	dispatch(setAllEvents(data))
	// }
}

export const fetchCheckInsAndLibrariesByCheckInProfileId = () => async (dispatch, getState) => {
	const {data} = await httpConfig('/apis/check-in')
	dispatch(setInitialCheckIns(data))
	const profileIds = _.uniq(_.map(getState().checkIns, "checkInProfileId"))
	profileIds.forEach(id => dispatch(fetchProfileByProfileId(id)))
}

export default checkInsSlice.reducer
