import {Router} from 'express';
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
// const router = Router()

// router.route('/:checkInId').get(asyncValidatorController( [
//     check('checkInId', 'please provide a valid checkInId').isUUID()
// ]), getCheckInByCheckInIdController)

checkInRoute.route('/:checkInId').get (asyncValidatorController([
    check('checkInId', 'Please provide a valid checkIn Id.').isUUID()]), getCheckInByCheckInIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)),putCheckInController)





checkInRoute.route('/checkInProfileId/:checkInProfileId').get(asyncValidatorController( [
    check('checkInProfileId', 'Please provide a valid checkInProfileId').isUUID()
]), getCheckInsByCheckInProfileIdController)




checkInRoute.route('/checkInId/:checkInId, /checkInProfileId/:checkInProfileId')
    .get(getLibraryByCheckInIdAndCheckInProfileIdController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)





checkInRoute.route('/')
    .get(getAllCheckInsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)




checkInRoute.route('/:checkInId')
    .delete(isLoggedInController, deleteCheckInController)