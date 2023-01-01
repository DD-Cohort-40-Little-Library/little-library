import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {check, checkSchema} from "express-validator"
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller"
import {checkInValidator} from "./check-in.validator"
import {
    postCheckInController,
    deleteCheckInController,
    getCheckInByCheckInIdController,
    putCheckInController,
    getCheckInByCheckInLibraryIdController,
    getAllCheckInByCheckInProfileIdController,
    getAllCheckInsForProfileTab
} from "./check-in.controller"
import {Router} from "express"

export const checkInRoute=Router()

checkInRoute.route('/')
    .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), postCheckInController)
    .get(isLoggedInController, getAllCheckInByCheckInProfileIdController)

checkInRoute.route('/:checkInId')
    .get (asyncValidatorController([check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)
    .delete(isLoggedInController, deleteCheckInController)

checkInRoute.route('/checkInLibraryId/:checkInLibraryId')
    .get(asyncValidatorController( [check('checkInLibraryId', 'Please provide a valid checkInLibraryId').isUUID()]), getCheckInByCheckInLibraryIdController)

checkInRoute.route('/checkInProfileId/:profileId')
    .get(asyncValidatorController([check('profileId', 'Please provide a valid profileId (2)')
        .isUUID()]), getAllCheckInsForProfileTab)