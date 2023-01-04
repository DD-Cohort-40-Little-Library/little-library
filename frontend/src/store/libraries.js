import {createSelector, createSlice} from "@reduxjs/toolkit"
import { httpConfig } from "../ui/shared/utils/http-config.js"


const librariesSlice = createSlice({
    name: "libraries",
    initialState: {},
    reducers: {
        setAllLibraries: (libraries, action) => action.payload,
        setInitialLibraries: (libraries, action) => {return action.payload},
        setSingleLibrary: (libraries, action) => {return action.payload},
        setLibraryByLibraryId: (libraries, action) => {libraries[action.payload.id] = action.payload.data}
    }
})

export const {setAllLibraries, setInitialLibraries, setSingleLibrary, setLibraryByLibraryId} = librariesSlice.actions

export const fetchAllLibraries = () => async dispatch => {
    const {data} = await httpConfig(`/apis/library/`)

    if (Array.isArray(data) === false) {
        throw new Error('Data is malformed')
    }

    const libraryDictionary = data.reduce((accumulator, currentValue) => {
        accumulator[currentValue.libraryId] = currentValue
        return accumulator
    },
    {}
    )
    dispatch(setInitialLibraries(libraryDictionary))
}

export const fetchLibrariesByProfileId = () => async (dispatch, getState) => {
    const auth = getState().auth
    const {data} = await httpConfig(`/apis/library/libraryProfileId/${auth.profileId}`);
    dispatch(setAllLibraries(data));
}

export const fetchLibraryByLibraryId = (id) => async (dispatch, getState) => {
    const libraries = getState().libraries
    if (libraries[id] === undefined) {
        const {data} = await httpConfig(`/apis/library/${id}`)
        dispatch(setLibraryByLibraryId({id, data}))
    }
}

export const selectLibraryByLibraryId = (id) =>
    createSelector(
        state => state?.libraries[id]
        ? state?.libraries[id]
            : null
    )

export default librariesSlice.reducer
