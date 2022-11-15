import { Request, Response, NextFunction } from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from '../../utils/models/Profile';
import {
    Library,
    PartialLibrary,
    insertLibrary,
    selectAllLibraries,
    selectLibraryByLibraryId,
    selectLibrariesByLibraryProfileId,
    updateLibrary, selectLibraryByLibraryIdAndLibraryProfileId
} from '../../utils/models/Library';



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

export async function getLibraryByLibraryProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
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
        const { libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType } = request.body

        const profile: Profile = request.session.profile as Profile
        const libraryProfileId: string = profile.profileId as string

        const library: Library = { libraryId: null, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType }

        const message: string = await insertLibrary(library)

        return response.json({status: 200, data: null, message})
        } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error creating the library. Try again later.',
            data: null
        })
    }
}

export async function getLibraryByLibraryIdAndLibraryProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {libraryId, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryName, librarySpecialization} = request.body
        const data = await selectLibraryByLibraryIdAndLibraryProfileId(libraryId, libraryProfileId)
        return response.json({
            status: 200,
            message: '',
            data: null
        })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

// @ts-ignore
export async function putLibraryController (request: Request, response: Response): Promise<Response> {
    try {
        const { libraryId } = request.params
        const profile = request.session.profile as Profile
        const libraryProfileId = profile.profileId as string
        const {libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType} = request.body
        const previousLibrary: Library | null = await selectLibraryByLibraryId(libraryId)

        if (previousLibrary === null) {
            return response.json({ status: 404, data: null, message: 'Library does not exist'})
        }

         if ( previousLibrary.libraryProfileId !== libraryProfileId) {
            return response.json({ status: 404, data: null, message: 'You are not allowed to perform this task!'})
        }

        const updatedValues = { libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType }

        const newLibrary = { ...previousLibrary, ...updatedValues}
        const message = await updateLibrary(newLibrary)
        // console.log(message)
        // console.log(newLibrary)
        return response.json({ status: 200, data: null, message })
        } catch (error: any) {
        return response.json({ status: 500, data: null, message: 'Internal server error' })
    }

}

