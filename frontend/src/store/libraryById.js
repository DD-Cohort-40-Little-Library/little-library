import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config.js";

const libraryByIdSlice = createSlice({
	name: "libraryId",
	initialState: [],
	reducers: {
		setLibraryById: (libraryId, action) => action.payload
	}
})

export const {setLibraryById} = libraryByIdSlice.actions

export default libraryByIdSlice.reducer

export const fetchLibraryByLibraryId = () => {
	return async function(dispatch) {
		const {data} = await httpConfig.get("/apis/library/")
		dispatch(setLibraryById(data))
	}
}