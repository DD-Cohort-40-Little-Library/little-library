import {sql} from "../database.utils"

export interface CheckIn {
    checkInId: string | null
    checkInLibraryId: string
    checkInProfileId: string
    checkInComment: string
    checkInDate: Date
    checkInFollowLibrary: Boolean
    checkInPhotoName: string | null
    checkInPhotoUrl: string | null
    checkInReport: Boolean
}

export async function insertCheckIn (checkIn: CheckIn): Promise<string>{
    const {checkInLibraryId, checkInProfileId, checkInComment, checkInDate, checkInFollowLibrary, checkInPhotoName,checkInPhotoUrl, checkInReport} = checkIn
    // @ts-ignore
    await sql `INSERT INTO check_in (check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report)
	VALUES (gen_random_uuid(), ${checkInLibraryId}, ${checkInProfileId}, ${checkInComment}, now(), ${checkInFollowLibrary}, ${checkInPhotoName ?? null}, ${checkInPhotoUrl ?? null}, ${checkInReport})`
    return 'CheckIn successfully created!'
}

export async function updateCheckIn (checkIn: CheckIn): Promise<string>{
    const {checkInId, checkInComment, checkInFollowLibrary, checkInPhotoName,checkInPhotoUrl, checkInReport} = checkIn
    // @ts-ignore
    await sql `UPDATE check_in SET check_in_comment = ${checkInComment}, check_in_follow_library = ${checkInFollowLibrary}, check_in_photo_name = ${checkInPhotoName}, check_in_photo_url = ${checkInPhotoUrl}, check_in_report = ${checkInReport} WHERE check_in_id = ${checkInId}`
    return 'CheckIn successfully update!'
}

export async function selectCheckInByCheckInId (checkInId: string): Promise<CheckIn|null> {
    const result = <CheckIn[]>await sql `SELECT check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report FROM check_in WHERE check_in_id = ${checkInId}`

    return result?.length === 1 ? result[0]:null
}

export async function selectCheckInByCheckInProfileId (checkInProfileId: string): Promise<CheckIn|null> {
    const result = <CheckIn[]>await sql `SELECT check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report FROM check_in WHERE check_in_profile_id = ${checkInProfileId}`

    return result?.length === 1 ? result[0] : null
}

export async function selectAllCheckInByCheckInProfileId (checkInProfileId:string): Promise<CheckIn[]> {
   return <CheckIn[]> await sql `SELECT check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report FROM check_in WHERE check_in_profile_id = ${checkInProfileId}`
}

export async function selectCheckInByCheckInLibraryId (checkInLibraryId: string): Promise<CheckIn[]> {
    const result = <CheckIn[]>await sql `SELECT check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report FROM check_in WHERE check_in_library_id = ${checkInLibraryId}`

    return result
}

export async function deleteCheckIn (checkIn: CheckIn): Promise<string>{
    const result = await sql `DELETE FROM check_in WHERE check_in_id = ${checkIn.checkInId}`
    if (result.count < 0) {
        return 'CheckIn does not exist'
    }
    return 'CheckIn was deleted'
}

export async function selectAllCheckInByProfileIdForProfileTab (profileId: string): Promise<CheckIn[]> {
    console.log(profileId)
    const data: CheckIn[] = await sql <CheckIn[]>`
        SELECT  check_in_id,
                check_in_library_id,
                check_in_profile_id,
                check_in_comment,
                check_in_date,
                check_in_photo_url,
                check_in_report,
                library_id,
                library_profile_id,
                library_address,
                library_description,
                library_event_opt_in,
                library_name,
                library_specialization,
                profile_id,
                profile_avatar_url,
                profile_name
        FROM check_in
                 INNER JOIN library
                            ON library.library_id = check_in.check_in_library_id
                 INNER JOIN profile
                            ON profile.profile_id = check_in.check_in_profile_id`
    return data
}