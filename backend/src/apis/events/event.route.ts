import {Router} from "express";
import {
    deleteEventByEventLibraryIdAndEventProfileId
    getAllEventsController,
    getAllEventsOrderByEventDateController,
    getEventByEventIdController,
    getEventByEventLibraryIdController,
    getEventByEventProfileIdController,
    postEvent
    putEventController
}   from './event.controller';
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller';
import {check, checkSchema} from 'express-validator';
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller';
import {eventValidator} from './event.validator';

export const eventRoute = Router()
eventRoute.route('/:eventId').get(asyncValidatorController([check('eventId', 'Please provide a valid eventId.').isUUID()
]), getEventByEventIdController)

eventRoute.route('/eventLibraryId/:eventLibraryId').get(asyncValidatorController
([check('eventLibraryId', 'Please provide a valid eventLibraryId.').isUUID()
]), getEventByEventLibraryIdController)

eventRoute.route('/eventProfileId/:eventProfileId').get(asyncValidatorController([check('eventProfileId', 'Please provide a valid eventProfileId.').isUUID()
]), getEventByEventProfileIdController)

eventRoute.route('/')
    .get(getAllEventsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((eventValidator))), postEvent)

eventRoute.route('/eventId/:eventId')
    .get(asyncValidatorController([check('libraryId', 'Please provide a valid eventId.').isUUID()]), getEventByEventIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(eventValidator)),putEventController)