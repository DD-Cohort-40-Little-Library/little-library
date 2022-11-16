import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
    deleteLibraryController,
    getAllLibrariesController, getLibraryByLibraryIdAndLibraryProfileIdController,
    getLibraryByLibraryIdController,
    getLibraryByLibraryProfileIdController, postLibrary, putLibraryController
} from "../library/library.controller";
import {libraryValidator} from "../library/library.validator";
import {libraryRoute} from "../library/library.route";

export const checkInRoute = Router()

checkInRoute.route('/')
    .post(isLoggedInController,asyncValidatorController(checkSchema((checkInValidator)), postCheckIn))

checkInRoute.route('check-in/:checkInId')
    .get (asyncValidatorController([check('checkInId', 'Please provide a valid check-in ID').isUUID()
    ]), getLibraryByLibraryIdController)

checkInRoute.route('/checkInProfileId/:checkInProfileId')
    .get (asyncValidatorController([check('checkInProfileId', 'Please provide a valid check-in profile ID').isUUID()]), getLibraryByLibraryProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

checkInRoute.route('/')
    .get(getAllCheckInsController)
    .post(isLoggedInController,asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)

checkInRoute.route('/checkInId/:checkInId')
    .get(getCheckInByCheckInIdController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)




// ************** Check from here on down!!!  *******************


checkInRoute.route('/checkInId/:checkInId, /checkInProfileId/:checkInProfileId')
    .get(getLibraryByCheckInIdAndCheckInProfileIdController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)

checkInRoute.route('/:checkInId')
    // .get (asyncValidatorController([check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)

checkInRoute.route('/:checkInId')
    .delete(isLoggedInController, deleteCheckInController)
