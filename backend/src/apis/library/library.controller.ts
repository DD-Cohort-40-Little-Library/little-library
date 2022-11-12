import e, {NextFunction, Request, response, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from '../../utils/models/Profile';
import {
    Library,
    PartialLibrary,
    insertLibrary,
    selectAllLibraries,
    selectLibraryByLibraryId,
    selectLibrariesByLibraryProfileId,
    selectPartialLibraryByLibraryId,
    selectPartialLibraryByLibraryIdAndLibraryProfileId,
    updateLibrary
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

export async function getPartialLibraryByLibraryIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { libraryId } = request.params
        const data = await selectPartialLibraryByLibraryId(libraryId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
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

// export async function getLibraryByLibraryIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
//     try {
//         const { libraryId } = request.params
//         const data = await selectLibraryByLibraryId(libraryId)
//         return response.json({ status: 200, message: null, data })
//     } catch (error) {
//         return response.json({
//             status: 500,
//             message: '',
//             data: null
//         })
//     }
// }

export async function postLibrary (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { libraryAddress, libraryDescription, libraryEventOptIn, libraryName, librarySpecialization, libraryType } = request.body
        const profile: Profile = request.session.profile as Profile
        const libraryProfileId: string = profile.profileId as string

        const library: Library = {
            libraryId: null,
            libraryProfileId,
            libraryAddress,
            libraryDescription,
            libraryEventOptIn,
            libraryLat,
            libraryLng,
            libraryName,
            librarySpecialization,
            libraryType
        }
        const result = await insertLibrary(library)
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

export async function getPartialLibraryByLibraryIdAndLibraryProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {libraryId, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryName, librarySpecialization} = request.body
        const data = await selectPartialLibraryByLibraryIdAndLibraryProfileId(libraryId, libraryProfileId)
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

export async function putLibrary (request: Request, response: Response): Promise<Response> => {
    const previousLibrary: Library = await selectLibraryByLibraryId(partialLibrary.libraryId as string) as Library
    const newLibrary: Library = { ...previousLibrary, ...partialLibrary}
    await updateLibrary (newLibrary)
    return response.json({status: 200, data: null, message: 'Library successfully update.'})
    }

    const updateFailed = (message: string): Response => {
    return response.json({status:400, data: null, message })
    }
