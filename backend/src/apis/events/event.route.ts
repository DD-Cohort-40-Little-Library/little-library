import {Router} from "express";
import {
    getAllEventsController,
    getAllEventsOrderByEventDateController,
    getEventByEventIdController,
    getEventByEventLibraryIdController,
    getEventByEventProfileIdController,
    postEvent
}   from './event.controller';
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller';
import {check, checkSchema} from 'express-validator';
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller';
import {eventValidator} from './event.validator';

const router = Router()
router.route('/:eventId').get(asyncValidatorController([check('eventId', 'Please provide a valid eventId.').isUUID()
]), getEventByEventIdController)

router.route('/eventLibraryId/:eventLibraryId').get(asyncValidatorController
([check('eventLibraryId', 'Please provide a valid eventLibraryId.').isUUID()
]), getEventByEventLibraryIdController)

router.route('/eventProfileId/:eventProfileId').get(asyncValidatorController([check('eventProfileId', 'Please provide a valid eventProfileId.').isUUID()
]), getEventByEventProfileIdController)

router.route('/')
    .get(getAllEventsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((eventValidator))), postEvent)

export default router