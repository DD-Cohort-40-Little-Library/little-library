import {Router} from "express"
import {
    deleteLibraryController,
    getAllLibrariesController, getLibraryByLibraryIdAndLibraryProfileIdController,
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

libraryRoute.route('/library/:libraryId')
    .get (asyncValidatorController([check('libraryId', 'Please provide a valid library ID').isUUID()
]), getLibraryByLibraryIdController)

libraryRoute.route('/libraryProfileId/:libraryProfileId')
    .get (asyncValidatorController([check('libraryProfileId', 'Please provide a valid library profile Id').isUUID()
]), getLibraryByLibraryProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

libraryRoute.route('/')
    .get(getAllLibrariesController)
    .post(isLoggedInController,asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryId/:libraryId')
    .get(getLibraryByLibraryIdController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryId/:libraryId, /libraryProfileId/:libraryProfileId')
    .get(getLibraryByLibraryIdAndLibraryProfileIdController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryId/:libraryId')
    .get (asyncValidatorController([check('libraryId', 'Please provide a valid library Id.').isUUID()]), getLibraryByLibraryIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(libraryValidator)),putLibraryController)

libraryRoute.route('/libraryId/:libraryId')
    .delete(isLoggedInController, deleteLibraryController)

// export default libraryRoute