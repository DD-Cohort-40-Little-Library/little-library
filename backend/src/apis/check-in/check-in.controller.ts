import { Request, Response, NextFunction} from "express";
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/models/Profile";
import {
    CheckIn, deleteCheckIn,
    insertCheckIn,
    selectCheckInByCheckInId,
    selectCheckInByCheckInProfileId, updateCheckIn
} from "../../utils/models/CheckIn";

export async function deleteCheckInController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { checkInId } = request.params
        const profile = request.session.profile as Profile
        const previousCheckIn: CheckIn|null = await selectCheckInByCheckInId(checkInId)

        if (previousCheckIn === null) {
            return response.json({ status: 404, data: null, message: 'CheckIn does not exist'})
        }

        if ( previousCheckIn.checkInId !== checkInId) {
            return response.json({ status: 404, data: null, message: 'You are not allowed to perform this task!'})
        }

        const message = await deleteCheckIn(previousCheckIn)
        return response.json({status: 200, data: null, message})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: 'internal server error'})
    }
}


export async function getCheckInByCheckInIdController (request: Request, response: Response, nextFunction: NextFunction):
Promise<Response<Status>> {
    try{
        const { checkInId } = request.params
        const data = await selectCheckInByCheckInId(checkInId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}


export async function getCheckInByCheckInProfileIdController (request: Request, response: Response, nextFunction: NextFunction):
    Promise<Response<Status>> {
    try{
        const { checkInProfileId } = request.params
        const data = await selectCheckInByCheckInProfileId(checkInProfileId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}


export async function postCheckInController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {checkInComment, checkInDate, checkInFollowLibrary, checkInPhotoName,checkInPhotoUrl, checkInReport } = request.body

        const profile: Profile = request.session.profile as Profile
        const checkInProfileId: string = profile.profileId as string
        const {checkInLibraryId} = request.params

        const checkIn: CheckIn = {checkInId: null, checkInLibraryId, checkInProfileId, checkInComment, checkInDate, checkInFollowLibrary, checkInPhotoName, checkInPhotoUrl, checkInReport}

        const message: string = await insertCheckIn(checkIn)

        return response.json ({status: 200, data: null, message})

    }catch(error) {
        return response.json ({status: 500, data: null, message: 'Error creating CheckIn. Try again later.'})
    }
}


export async function putCheckInController (request: Request, response: Response): Promise<Response> {
    try {
        const { checkInId } = request.params
        const profile = request.session.profile as Profile
        const checkInProfileId = profile.profileId as string
        const {
            checkInComment,
            checkInDate,
            checkInFollowLibrary,
            checkInPhotoName,
            checkInPhotoUrl,
            checkInReport
        } = request.body
        const previousCheckIn: CheckIn | null = await selectCheckInByCheckInId(checkInId)

        if (previousCheckIn === null) {
            return response.json({status: 404, data: null, message: 'Unable to CheckIn'})
        }

        if (previousCheckIn.checkInProfileId !== checkInProfileId) {
            return response.json({status: 404, data: null, message: 'You are not allowed to perform this task!'})
        }

        const updatedValues = {
            checkInProfileId,
            checkInComment,
            checkInDate,
            checkInFollowLibrary,
            checkInPhotoName,
            checkInPhotoUrl,
            checkInReport
        }

        const newCheckIn = {...previousCheckIn, ...updatedValues}
        const message = await updateCheckIn(newCheckIn)
        return response.json({status: 200, data: null, message})
    } catch (error: any) {
        console.error(error)
        return response.json({status: 500, data: null, message: 'Internal server error'})
    }
}
