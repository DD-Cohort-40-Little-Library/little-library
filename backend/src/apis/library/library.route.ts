import {Router} from "express"
import {
    deleteLibraryController,
    getAllLibrariesController, getAllLibrariesOptInController, getLibraryByLibraryIdAndLibraryProfileIdController,
    getLibraryByLibraryIdController,
    getLibraryByLibraryProfileIdController,
    postLibrary,
    putLibraryController
} from './library.controller'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {check, checkSchema} from "express-validator"
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller"
import {libraryValidator} from './library.validator'

export const libraryRoute = Router()

libraryRoute.route('/')
    .post(isLoggedInController, asyncValidatorController(checkSchema(libraryValidator)), postLibrary)
    .get(getAllLibrariesController)


libraryRoute.route('/libraryEventOptIn')
    .get(getAllLibrariesOptInController)


libraryRoute.route('/:libraryId')
    .get (asyncValidatorController([check('libraryId', 'Please provide a valid library ID').isUUID()
]), getLibraryByLibraryIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(libraryValidator)),putLibraryController)
    .delete(isLoggedInController, deleteLibraryController)


libraryRoute.route('/libraryProfileId/:libraryProfileId')
    .get (asyncValidatorController([check('libraryProfileId', 'Please provide a valid library profile Id').isUUID()
]), getLibraryByLibraryProfileIdController)


// export default libraryRoute