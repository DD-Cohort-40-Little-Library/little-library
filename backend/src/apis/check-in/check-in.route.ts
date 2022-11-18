
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {checkInValidator} from "./check-in.validator";
import {
    postCheckInController,
    deleteCheckInController,
    getCheckInByCheckInIdController,
    getCheckInByCheckInProfileIdController,
    putCheckInController, getCheckInByCheckInLibraryIdController, getAllCheckInByCheckInProfileIdController
} from "./check-in.controller";
import {Router} from "express";
import {libraryValidator} from "../library/library.validator";
import {getAllLibrariesController, postLibrary} from "../library/library.controller";
import {libraryRoute} from "../library/library.route";
import {selectAllCheckInByCheckInProfileId} from "../../utils/models/CheckIn";

export const checkInRoute=Router()

checkInRoute.route('/')
    .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), postCheckInController)
    .get(getAllCheckInByCheckInProfileIdController)


checkInRoute.route('/checkInLibraryId/:checkInLibraryId')
    .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),postCheckInController)


checkInRoute.route('/checkInId/:checkInId')
    .get (asyncValidatorController([check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)



checkInRoute.route('/')
    .get(asyncValidatorController( [check('checkInProfileId', 'Please provide a valid checkInProfileId').isUUID()]), getCheckInByCheckInProfileIdController)



checkInRoute.route('/checkInLibraryId/:checkInLibraryId')
    .get(asyncValidatorController( [check('checkInLibraryId', 'Please provide a valid checkInLibraryId').isUUID()]), getCheckInByCheckInLibraryIdController)


checkInRoute.route('/checkInId/:checkInId')
    .delete(isLoggedInController, deleteCheckInController)