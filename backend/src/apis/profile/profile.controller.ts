import {Request, Response} from "express"
import {
    deleteProfile,
    PartialProfile,
    Profile,
    selectPartialProfileByProfileId,
    selectWholeProfileByProfileId,
    updateProfile
} from "../../utils/models/Profile"
import { Status } from "../../utils/interfaces/Status"

export async function putProfileController (request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params
        const { profileAvatarUrl, profileEmail, profileFirstName, profileLastName, profileName } = request.body
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string

        const performUpdate = async (partialProfile: PartialProfile):
        Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId (partialProfile.profileId as string) as Profile
            const newProfile: Profile = { ...previousProfile, ...partialProfile }

            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: 'profile successfully updated' })
        }

        const updateFailed = (message: string): Response => {
            return response.json({ status: 400, data: null, message })
        }

        return profileId === profileIdFromSession
        ? await performUpdate({ profileId, profileAvatarUrl, profileEmail, profileFirstName, profileLastName, profileName })
        : updateFailed('you are not allowed to preform this action')
    } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message })
    }
}

export async function getProfileByProfileIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { profileId } = request.params
        const sqlResult = await selectPartialProfileByProfileId(profileId)
        const data = sqlResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 400, data: null, message: error.message }))
    }
}

export async function deleteProfileController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { profileId } = request.params
        const previousProfile: Profile|null = await selectWholeProfileByProfileId(profileId)

        if (previousProfile === null) {
            return response.json({ status: 404, data: null, message: 'Profile does not exist'})
        }

        if ( previousProfile.profileId !== profileId) {
            return response.json({ status: 404, data: null, message: 'You are not allowed to perform this task!'})
        }

        const profileMessage = await deleteProfile(previousProfile)
        return response.json({status: 200, data: null, profileMessage})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: 'internal server error'})
    }
}
