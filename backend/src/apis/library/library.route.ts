import {Router} from "express"
import {
    getAllLibrariesController,
    getLibraryByLibraryIdController,
    getLibraryByLibraryProfileIdController,
    getPartialLibraryByLibraryIdController,
    postLibrary,
    getPartialLibraryByLibraryIdAndLibraryProfileIdController,
    putLibraryController
} from './library.controller'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {check, checkSchema} from "express-validator"
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"
import {libraryValidator} from './library.validator'

export const libraryRoute = Router()

libraryRoute.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(libraryValidator)), postLibrary)

libraryRoute.route('/library/:libraryId')
    .get (asyncValidatorController([check('libraryId', 'Please provide a valid library ID').isUUID()
]), getLibraryByLibraryIdController)

libraryRoute.route('/libraryProfileId/:libraryProfileId')
    .get (asyncValidatorController([check('libraryProfileId', 'Please provide a valid library profile Id').isUUID()
]), getLibraryByLibraryProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

libraryRoute.route('/')
    .get(getAllLibrariesController)
    .post(isLoggedIn,asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryId/:libraryId')
    .get(getPartialLibraryByLibraryIdController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryId/:libraryId, /libraryProfileId/:libraryProfileId')
    .get(getPartialLibraryByLibraryIdAndLibraryProfileIdController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((libraryValidator))), postLibrary)

libraryRoute.route('/libraryAddress/:libraryAddress, /libraryDescription/:libraryDescription, /libraryEventOptIn/:libraryEventOptIn, /libraryName/:libraryName, /librarySpecialization/:librarySpecialization')
    .post(putLibraryController)




// export default libraryRoute