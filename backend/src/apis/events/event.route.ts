import {Router} from "express";
import {
    deleteEventController,
    getAllEventsOrderByEventDateController,
    getEventByEventIdController,
    getEventByEventLibraryIdController,
    // getEventByEventProfileIdController,
    postEventController,
    putEventController
}   from './event.controller';
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller';
import {check, checkSchema} from 'express-validator';
import {isLoggedInController} from '../../utils/controllers/isLoggedIn.controller';
import {eventValidator} from './event.validator';

export const eventRoute = Router()
eventRoute.route('/eventId/:eventId').get(asyncValidatorController([check('eventId', 'Please provide a valid eventId.').isUUID()
]), getEventByEventIdController)

eventRoute.route('/eventLibraryId/:eventLibraryId').get(asyncValidatorController
([check('eventLibraryId', 'Please provide a valid eventLibraryId.').isUUID()
]), getEventByEventLibraryIdController)

// eventRoute.route('/eventProfileId/:eventProfileId').get(asyncValidatorController([check('eventProfileId', 'Please provide a valid eventProfileId.').isUUID()
// ]), getEventByEventProfileIdController)

eventRoute.route('/')
    .get(getAllEventsOrderByEventDateController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((eventValidator))), postEventController)

eventRoute.route('/eventId/:eventId')
    .get(asyncValidatorController([check('libraryId', 'Please provide a valid eventId.').isUUID()]), getEventByEventIdController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(eventValidator)),putEventController)

eventRoute.route('/eventId/:eventId')
    .delete(isLoggedInController, deleteEventController)

eventRoute.route('/')
    .post(isLoggedInController, asyncValidatorController(checkSchema(eventValidator)), postEventController)