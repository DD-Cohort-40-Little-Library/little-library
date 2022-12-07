import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";


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

export const fetchAllCheckIns = () =>{
	return async function (dispatch) {
		const {data} = await httpConfig.get('/apis/check-in/')
		dispatch(setAllCheckIns(data))
	}
}