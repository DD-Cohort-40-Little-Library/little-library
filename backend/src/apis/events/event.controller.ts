import {Request, Response, NextFunction} from 'express';
import {
    deleteEvent,
    insertEvent,
    selectAllEventsOrderByEventDate,
    selectEventByEventLibraryId,
    updateEvent,
    selectEventByEventId,
    selectEventByEventIdAndEventProfileId,
    selectEventByEventDate,
    Event
} from '../../utils/models/Events';
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";


export async function postEventController (request:Request, response: Response): Promise<Response<Status>> {
    try {
        const {eventLibraryId} = request.params
        const {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = request.body
        const profile:Profile = request.session.profile as Profile
        const eventProfileId: string = profile.profileId as string
        const event: Event = {eventId: null, eventLibraryId, eventProfileId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType}
        const message: string = await insertEvent(event)
        return response.json({status:200, data: null, message})
    } catch (error) {
        return response.json({status:500, message: 'Internal server error (1).', data: null})
    }
}

export async function putEventController (request:Request, response:Response): Promise<Response> {
    try {
        const {eventId} = request.params
        const profile = request.session.profile as Profile
        const eventProfileId = profile.profileId as string
        const {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = request.body
        const previousEvent: Event|null = await selectEventByEventId(eventId)
        if (previousEvent === null) {
            return response.json({status:404, data: null, message: 'EventId does not exist (1).'})
        }
        if (previousEvent.eventProfileId !== eventProfileId) {
            return response.json({status:401, data: null, message: 'You are not allowed to perform this task.'})
        }
        const updatedValues = {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType}
        const newEvent: Event = { ...previousEvent, ...updatedValues}
        const message = await updateEvent(newEvent)
        return response.json({status: 200, data: null, message})
    } catch (error: any) {
        return response.json({status:500, data: null, message: 'Internal server error (2).'})
    }
}

export async function getEventByEventIdController (request:Request, response:Response): Promise<Response> {
    try {
        const {eventId}=request.params
        const data = await selectEventByEventId(eventId)
        return response.json({status:200, message:null, data})
    } catch (error) {
        return response.json({status:500, message: 'EventId does not exist (2).', data:null})
    }
}

export async function getEventByEventLibraryIdController (request: Request, response: Response):Promise<Response<Status>> {
    try {
        const {eventLibraryId} = request.params
        const data = await selectEventByEventLibraryId (eventLibraryId)
        return response.json({status:200, message: null, data})
    } catch (error) {
        return response.json({status:500, message: 'EventLibraryId does not exist.', data:null})
    }
}

export async function getAllEventsOrderByEventDateController (request : Request, response: Response):Promise<Response<Status>> {
    try {
        // const {eventDate} = request.params
        // const date = new Date (eventDate)
        const data = await selectAllEventsOrderByEventDate()
        return response.json ({status:200, message:null, data})
    } catch (error) {
        return response.json ({status:500, message: 'Internal server error (3)', data:null})
    }
}

export async function getEventByEventDateController (request: Request, response: Response):Promise<Response<Status>> {
    try {
        const {eventDate} = request.params
        const date = new Date (eventDate)
        const data = await selectEventByEventDate(date)
        return response.json ({status:200, message:null, data})
    } catch (error) {
        return response.json ({status:500, message: 'Internal server error (3)', data:null})
    }
}

export async function deleteEventController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { eventId } = request.params
        const profile = request.session.profile as Profile
        const eventProfileId = profile.profileId as string
        const previousEvent: Event|null = await selectEventByEventId (eventId)

        if (previousEvent === null) {
            return response.json({ status: 404, data: null, message: 'EventId does not exist.'})
        }

        if ( previousEvent.eventProfileId !== eventProfileId) {
            return response.json({ status: 401, data: null, message: 'You are not allowed to perform this task.'})
        }

        const message = await deleteEvent(previousEvent)
        return response.json({status: 200, data: null, message})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: 'Internal server error.'})
    }
}

