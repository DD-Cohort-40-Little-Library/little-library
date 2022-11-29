import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/http-config.js";
import { fetchProfileByProfileId } from './profiles.js'

const librarySlice = createSlice({
    name: "libraries",
    initialState: [],
    reducers: {
        setAllLibraries: (libraries, action) => {
            return action.payload
        }
    }
})

export const {setAllLibraries} = librarySlice.actions

export const fetchAllLibraries = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/library/");
    dispatch(setAllLibraries(data));
    let profileIdSet = new Set
    for (let library of data){
        const {libraryId, libraryProfileId} = library
        if(profileIdSet.has(libraryProfileId) === false) {
            profileIdSet.add(libraryProfileId)
            dispatch(fetchProfileByProfileId(libraryProfileId))
        }
    }
};

export default librarySlice.reducer
