import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/http-config.js";


const librariesSlice = createSlice({
    name: "libraries",
    initialState: {},
    reducers: {
        setAllLibraries: (libraries, action) => action.payload ,
        setSingleLibrary: (libraries, action) => {return action.payload},
        setInitialLibraries: (libraries, action) => action.payload
    }
})

export const {setAllLibraries, setSingleLibrary, setInitialLibraries} = librariesSlice.actions

export default librariesSlice.reducer

export const fetchLibrariesByProfileId = () => async (dispatch, getState) => {
    const auth = getState().auth
    const {data} = await httpConfig(`/apis/library/libraryProfileId/${auth.profileId}`);
    dispatch(setAllLibraries(data));
}

export const fetchLibraryByLibraryId = (libraryId) => async (dispatch) => {
    // return async function (dispatch) {
        const {data} = await httpConfig.get(`/apis/library/${libraryId}`);
        dispatch(setSingleLibrary(data));
    // }
}

// export const fetchAllLibraries = () => {
//     return async function (dispatch) {
//     const {data} = await httpConfig.get("/apis/library/");
//     dispatch(setAllLibraries(data));
//     }
// }

export const fetchAllLibraries = () => async dispatch => {

    const { data } = await httpConfig(`/apis/library/`)

    if (Array.isArray(data) === false) {
        throw new Error('Data is malformed')
    }

    const libraryDictionary = data.reduce((accumulator, currentValue) => {
            accumulator[currentValue.checkInId] = currentValue
            return accumulator
        },
        {}
    )
    dispatch(setInitialLibraries(libraryDictionary))
}
