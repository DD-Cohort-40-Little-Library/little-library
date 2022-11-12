import e, {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Profiler} from "inspector";
import Profile = module

export async function getAllLibrariesController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllLibraries()
        // return the response
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getLibrariesByLibraryProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { libraryProfileId } = request.params
        const data = await selectLibrariesByLibraryProfileId(libraryProfileId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getLibraryByLibraryIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { libraryId } = request.params
        const data = await selectLibraryByLibraryId(libraryId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function postLibrary (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { libraryProfile } = request.body
        const profile: Profile = request.session.profile as Profile
        const libraryProfileId: string = profile.profileId as string

        const libraryProfile: Library = {
            libraryId: null,
            libraryProfileId,
            libraryAddress,
            libraryDescription,
            libraryEventsOptIn,
            libraryLat,
            libraryLng,
            libraryName,
            librarySpecialization,
            libraryType
        }
        const result = await selectLibraryByLibraryId(libraryId)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating the library. Try again later.',
            data: null
        })
    }
}

