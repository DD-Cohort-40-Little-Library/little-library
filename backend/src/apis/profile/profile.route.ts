import {deleteProfileController, getProfileByProfileIdController, putProfileController} from './profile.controller'
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import { profileValidator } from './profile.validator'
import {deleteLibraryController} from "../library/library.controller";
import {libraryRoute} from "../library/library.route";


export const ProfileRoute: Router = Router()
ProfileRoute.route('/')
    .post(putProfileController)

ProfileRoute.route('/:profileId')
    .get(
        asyncValidatorController([
            check('profileId', 'please provide a valid profileId')
                .isUUID()
        ])
        , getProfileByProfileIdController
    )
    .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

ProfileRoute.route('/:profileId')
    .delete(isLoggedInController, deleteProfileController)