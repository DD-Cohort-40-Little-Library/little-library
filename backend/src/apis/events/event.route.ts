import {Router} from "express";
import {
    deleteEventController,
    getAllEventsOrderByEventDateController, getEventByEventDateController,
    getEventByEventIdController,
    getEventByEventLibraryIdController,
    getAllEventsByEventProfileIdController,
    postEventController,
    putEventController
} from './event.controller';
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller';
import {check, checkSchema} from 'express-validator';
import {isLoggedInController} from '../../utils/controllers/isLoggedIn.controller';
import {eventValidator} from './event.validator';

export const eventRoute = Router()
eventRoute.route('/:eventId')
    .get(asyncValidatorController([check('eventId', 'Please provide a valid eventId.').isUUID()]), getEventByEventIdController)
    .delete(isLoggedInController, deleteEventController)
    .put(isLoggedInController, asyncValidatorController(checkSchema(eventValidator)),putEventController)


eventRoute.route('/eventLibraryId/:eventLibraryId')
    .get(asyncValidatorController
([check('eventLibraryId', 'Please provide a valid eventLibraryId.').isUUID()]), getEventByEventLibraryIdController)

eventRoute.route('/eventProfileId/:eventProfileId')
    .get(asyncValidatorController([check('eventProfileId', 'Please provide a valid eventProfileId.').isUUID()]), getAllEventsByEventProfileIdController)

eventRoute.route('/')
    .get(getAllEventsOrderByEventDateController)
    .post(isLoggedInController, asyncValidatorController(checkSchema((eventValidator))), postEventController)


eventRoute.route('/eventDate/:eventDate')
    .get(getEventByEventDateController)

eventRoute.route('/eventId/:eventId')
