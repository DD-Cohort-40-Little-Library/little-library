import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";
import {setAllLibraries} from "./libraries.js";
import {setAllEvents} from "./events.js";


const checkInsSlice = createSlice({
	name: "checkins",
	initialState: [],
	reducers: {
		setAllCheckIns: (
			(checkins, action) => action.payload
		)
	}
})

export const {setAllCheckIns} = checkInsSlice.actions

export default checkInsSlice.reducer

export const fetchCheckInsByProfileId = () => async (dispatch, getState) => {
	const auth = getState().auth
	const {data} = await httpConfig(`/apis/check-in/`);
	dispatch(setAllCheckIns(data));
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
	dispatch(setAllCheckIns(data))
	// }
}