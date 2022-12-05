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
    librarySpecialization: number
    libraryType: string
}

export async function insertLibrary (library: Library): Promise<string> {
    console.log(library)
    const { libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType } = library
    await sql `INSERT INTO library(library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type) VALUES(gen_random_uuid(), ${libraryProfileId}, ${libraryAddress}, ${libraryDescription}, ${libraryEventOptIn}, ${libraryLat}, ${libraryLng}, ${libraryName}, ${librarySpecialization}, ${libraryType})`
    return 'Library created successfully!'
}

export async function selectAllLibraries(): Promise<Library[]> {
    return <Library[]><unknown>await sql`SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library`
}


export async function selectAllLibrariesOptIn(): Promise<Library[]> {
    return <Library[]><unknown>await sql`SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_event_opt_in = true`
}


export async function selectLibraryByLibraryId (libraryId: string): Promise<Library | null> {
    const result = <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ${libraryId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectLibrariesByLibraryProfileId (libraryProfileId: string): Promise<Library[]> {
    return <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_profile_id = ${libraryProfileId}`
}

export async function selectLibraryByLibraryIdAndLibraryProfileId (libraryId: string, libraryProfileId: string): Promise<Library | null> {
    const result = <Library[]> await sql `SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ${libraryId} AND library_profile_id = ${libraryProfileId}`
    return result?.length === 1 ? result[0] : null
}

export async function updateLibrary (library: Library): Promise<string> {
     const { libraryId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType } = library
    await sql `UPDATE library SET library_address = ${libraryAddress}, library_description = ${libraryDescription}, library_event_opt_in = ${libraryEventOptIn}, library_lat = ${libraryLat}, library_lng = ${libraryLng}, library_name = ${libraryName}, library_specialization = ${librarySpecialization}, library_type = ${libraryType} WHERE library_id = ${libraryId}`
    return 'Library updated successfully!'
}

export async function deleteLibrary (library: Library): Promise<string> {
    const result = await sql `DELETE FROM library WHERE library_id = ${library.libraryId}`
    if (result.count < 0) {
        return 'Library does not exist'
    }
    return 'Library was deleted.'
}