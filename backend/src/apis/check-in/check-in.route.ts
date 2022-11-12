import {Router} from 'express';
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const router = Router()

router.route('/:checkInId').get(asyncValidatorController( [
    check('checkInId', 'please provide a valid checkInId').isUUID()
]), getCheckInByCheckInIdController)

router.route('/checkInProfileId/:checkInProfileId').get(asyncValidatorController( [
    check('checkInProfileId', 'please provide a valid checkInProfileId').isUUID()
]), getCheckInsByCheckInProfileIdController)

router.route('/')
    .get(getAllCheckInsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((checkInValidator))), postCheckIn)

export default router

