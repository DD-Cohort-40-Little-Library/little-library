import {createSlice} from '@reduxjs/toolkit';
import { httpConfig } from '../ui/shared/utils/httpConfig'

const profileIdSlice = createSlice( {
    name: "profiles",
    initialState: [],
    reducers: {
        setProfile: (profiles, action) => profiles[action.payload.profileId] = action.payload.data
    }
})

export const {setProfile} = profileIdSlice.actions

export const fetchProfileByProfileId = (profileId) => async (dispatch, getState) => {
    const state = getState()

    const profiles = state.profiles
    if(profiles[profileId] === undefined) {
        const {data} = await httpConfig(`/apis/profile/${profileId}`)
        dispatch(setProfile ({profileId, data}))
    }
}

export default profileIdSlice.reducer
