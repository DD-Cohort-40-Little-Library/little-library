import {sql} from '../database.utils'

export interface Library {
    libraryId: string|null
    libraryProfileId: string
    libraryAddress: string
    libraryDescription: string
    libraryEventOptIn: boolean
    libraryLat: number
    libraryLng: number
    libraryName: string
    librarySpecialization: string
    libraryType: string
}

export interface PartialLibrary {
    libraryId: string|null
    libraryProfileId: string
    libraryAddress: string
    libraryDescription: string
    libraryEventOptIn: boolean
    libraryName: string
    librarySpecialization: string
}

export async function insertLibrary (library: Library): Promise<string> {
    const {libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType} = library
    await sql `INSERT INTO library(library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type) VALUES(gen_random_uuid(), ${libraryProfileId}, ${libraryAddress}, ${libraryDescription}, ${libraryEventOptIn}, ${libraryLat}, ${libraryLng}, ${libraryName}, ${librarySpecialization}, ${libraryType})`
    return 'Library created successfully!'
}

// export async function selectAllLibraries (): Promise<Library[]> {
//     return <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library ORDER BY library_id DESC`
// }
//
// export async function selectLibraryByLibraryId (libraryId: string): Promise<Library | null> {
//     const result = <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ${libraryId}`
//     return result?.length === 1 ? result[0] : null
// }
//
// export async function selectLibrariesByLibraryProfileId (libraryProfileId: string): Promise<Library[]> {
//     return <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_profile_id = ${libraryProfileId}`
// }
//
// export async function selectPartialLibraryByLibraryId (libraryId: string): Promise<Library[]> {
//     return <Library[]> await sql `SELECT library_id, library_address, library_description, library_name, library_specialization FROM library WHERE library_id = ${libraryId}`
// }
//
// export async function selectPartialLibraryByLibraryIdAndLibraryProfileId (libraryId: string, libraryProfileId: string): Promise<Library[]> {
//     return <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_name, library_specialization, library_type FROM library WHERE library_id = {${libraryId} AND library_profile_id = ${libraryProfileId}`
// }
//
// export async function updateLibrary (libraryId: string, libraryProfileId: string): Promise<Library[]> {
//     return <Library[]> await sql `UPDATE library SET library_address = :libraryAddress, library_description = :libraryDescription, library_event_opt_in = :libraryEventOptIn, library_name = :libraryName, library_specialization = :librarySpecialization WHERE library_id = ${library_id} AND library_profile_id = ${library_profile_id}`