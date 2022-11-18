
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {checkInValidator} from "./check-in.validator";
import {
    postCheckInController,
    deleteCheckInController,
    getCheckInByCheckInIdController,
    getCheckInByCheckInProfileIdController,
    putCheckInController, getCheckInByCheckInLibraryIdController
} from "./check-in.controller";
import {Router} from "express";

export const checkInRoute=Router()



checkInRoute.route('/checkInLibraryId/:checkInLibraryId')
    .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),postCheckInController)


checkInRoute.route('/checkInId/:checkInId')
    .get (asyncValidatorController([check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)



checkInRoute.route('/')
    .get(asyncValidatorController( [check('checkInProfileId', 'Please provide a valid checkInProfileId').isUUID()]), getCheckInByCheckInProfileIdController)



checkInRoute.route('/checkInLibraryId/:checkInLibraryId')
    .get(asyncValidatorController( [check('checkInLibraryId', 'Please provide a valid checkInLibraryId').isUUID()]), getCheckInByCheckInLibraryIdController)

// checkInRoute.route('/')
//     .get(getAllCheckInController)
//     .post(isLoggedIn, asyncValidatorController(checkSchema((checkInValidator))), postCheckInController)




checkInRoute.route('/checkInId/:checkInId')
    .delete(isLoggedInController, deleteCheckInController)