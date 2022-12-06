import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/http-config.js";


const librariesSlice = createSlice({
    name: "libraries",
    initialState: [],
    reducers: {
        setAllLibraries: (libraries, action) => action.payload
    }
})

export const {setAllLibraries} = librariesSlice.actions

export default librariesSlice.reducer

export const fetchAllLibraries = () => {
    return async function (dispatch) {
    const {data} = await httpConfig.get("/apis/library/");
    console.log('data', data)
    dispatch(setAllLibraries(data));
    }
}



