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

//
export async function insertQuickCheckIn

//Used to update the editable portions of a checkin
export async function updateCheckIn

//Used to get the editable portions of a checkin and ensure it is selected by the library and user it belongs to
export async function selectPartialCheckInByCheckInLibraryIdAndCheckInProfileID

