import {Request, Response, NextFunction} from 'express';
import {
    deleteEventByEventLibraryIdAndEventProfileId,
    insertEvent,
    selectAllEventsOrderByDate,
    selectEventsByLibraryId,
    selectEventByEventIdByEventProfileId,
    selectEventById,
    selectEventByDate,
    updateEvent
} from '../../utils/models/Events';
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";

export async function