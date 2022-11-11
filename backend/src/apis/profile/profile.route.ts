import { getProfileByProfileId, putProfileCntroller } from './profile.controller'
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import { profileValidator } from './profile.validator'


export const ProfileRoute: Router = Router()
ProfileRoute.route('/')
    .post(putProfileController)

ProfileRoute.route('/')
    .post(putProfileController)

ProfileRoute.route('/:profileID')
    .get(
        asyncValidatorController([
            check('profileId', 'please provide a vaild profileId')
                .isUUID()
        ])
        , getProfileByProfileId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)