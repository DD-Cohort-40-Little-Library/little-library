
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {checkInValidator} from "./check-in.validator";
import {
    deleteCheckInController,
    getCheckInByCheckInIdController,
    getCheckInByCheckInProfileIdController,
    putCheckInController
} from "./check-in.controller";
import {Router} from "express";

export const checkInRoute=Router()


checkInRoute.route('/:checkInId')
    .get (asyncValidatorController([check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)



checkInRoute.route('/checkInProfileId/:checkInProfileId')
    .get(asyncValidatorController( [check('checkInProfileId', 'Please provide a valid checkInProfileId').isUUID()]), getCheckInByCheckInProfileIdController)



// checkInRoute.route('/')
//     .get(getAllCheckInController)
//     .post(isLoggedIn, asyncValidatorController(checkSchema((checkInValidator))), postCheckInController)




checkInRoute.route('/:checkInId')
    .delete(isLoggedInController, deleteCheckInController)