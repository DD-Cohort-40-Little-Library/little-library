import {Profile} from "../../utils/models/Profile";

export async function CheckInController (request: Request, response: Response):
Promise<Response> {
    try{
        const checkInLibraryId = request.params
        const {checkInProfileId, checkInComment, checkInDate, checkInFollowLibrary, checkInPhotoName,checkInPhotoUrl, checkInReport } = request.body

        const profile = request.session.profile as Profile

        const per
    }
}

CheckInByCheckInIdController

CheckInsByCheckInProfileIdController

LibraryByCheckInIdAndCheckInProfileIdController

deleteCheckInController