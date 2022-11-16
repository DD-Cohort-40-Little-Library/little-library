import {sql} from "../database.utils";

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

export interface PartialCheckIn {
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
    await sql `INSERT INTO check_in (check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report)
	VALUES (gen_random_uuid(), ${checkInLibraryId}, ${checkInProfileId}, ${checkInComment}, ${checkInDate}, ${checkInFollowLibrary}, ${checkInPhotoName}, ${checkInPhotoUrl}, ${checkInReport})`
    return 'CheckIn successfully created!'
}

export async function insertQuickCheckIn (checkIn: CheckIn): Promise<string>{
    const {checkInLibraryId, checkInProfileId, checkInDate, checkInFollowLibrary, checkInReport} = checkIn
    await sql `INSERT INTO check_in (check_in_id, check_in_library_id, check_in_profile_id, check_in_date, check_in_follow_library, check_in_report)
	VALUES (gen_random_uuid(), ${checkInLibraryId}, ${checkInProfileId}, ${checkInDate}, ${checkInFollowLibrary}, ${checkInReport})`
    return 'Quick CheckIn successfully created!'
}


//Used to update the editable portions of a checkin
export async function updateCheckIn (checkIn: CheckIn): Promise<string>{
    const {checkInLibraryId, checkInProfileId, checkInComment, checkInFollowLibrary, checkInPhotoName,checkInPhotoUrl, checkInReport} = checkIn
    await sql `UPDATE check_in SET check_in_id, check_in_library_id = ${checkInLibraryId}, check_in_profile_id = ${checkInProfileId}, check_in_comment = ${checkInComment}, check_in_date = ${checkInDate},check_in_follow_library = ${checkInFollowLibrary}, check_in_photo_name = ${checkInPhotoName}, check_in_photo_url = ${checkInPhotoUrl}, check_in_report= ${checkInReport})`
    return 'CheckIn successfully update!'
}


//Used to get the editable portions of a checkin and ensure it is selected by the library and user it belongs to
export async function selectPartialCheckInByCheckInLibraryIdAndCheckInProfileID (checkIn: string): Promise<CheckIn|null> {
    const result = <CheckIn[]>await sql `SELECT check_in_id, check_in_library_id, check_in_profile_id, check_in_comment, check_in_date, check_in_follow_library, check_in_photo_name, check_in_photo_url, check_in_report =${checkIn}`

    return result?.length === 1 ? result[0] : null
}