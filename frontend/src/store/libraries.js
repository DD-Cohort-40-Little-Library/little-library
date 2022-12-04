import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/http-config.js";
// import { fetchProfileByProfileId } from './profiles.js'

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
    dispatch(setAllLibraries(data));
    // let profileIdSet = new Set
    // for (let library of data){
    //     const {libraryId, libraryProfileId} = library
    //     if(profileIdSet.has(libraryProfileId) === false) {
    //         profileIdSet.add(libraryProfileId)
    //         dispatch(fetchProfileByProfileId(libraryProfileId))
    //     }
    }
}

