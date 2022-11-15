import {Request, Response, NextFunction} from 'express';
import {
    deleteEventByEventLibraryIdAndEventProfileId,
    insertEvent,
    selectAllEventsOrderByEventDate,
    selectEventByEventLibraryId,
    updateEvent,
    selectEventByEventId,
    selectEventByEventIdAndEventProfileId,
    selectEventByEventDate
} from '../../utils/models/Events';
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import s from "connect-redis";

export async function postEventController (request:Request, response: Response): Promise<Response> {
    try {
        const {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = request.body
        const profile = request.session.profile as Profile
        const eventProfileId: string = profile.profileId as string
        const event:Event = {eventId:null, eventLibraryId, eventProfileId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType}
        const message: string = await insertEvent(event)
        return response.json({status:200, data: null, message})
    } catch (error) {
        return response.json({status:500, message: 'Internal server error (1).'})
    }
}

export async function putEventController (request:Request, response:Response): Promise<Response> {
    try {
        const {eventId} = request.params
        const profile =request.session.profile as Profile
        const eventProfileId = profile.profileId as string
        const {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = request.body
        const previousEvent: Event|null = await selectEventByEventId(eventId)
        if (previousEvent === null) {
            return response.json {status:404, data: null, message: 'EventId does not exist (1).'}
        }
        if (eventProfileId !== previousEvent.eventProfileId) {
            return response.json({status:401, data: null, message: 'You are not allowed to perform this task.'})
        }
        const updatedValues = {eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType}
        const newEvent: Event = { ...previousEvent, ...updatedValues}
        const message: string = await updateEvent(newEvent)
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
        return response.json({status:500, message: 'EventId does not exist (2).', data:[]})
    }
}

export async function getEventByEventLibraryIdController (request: Request, response: Response):Promise<Response<Status>> {
    try {
        const {eventLibraryId} = request.params
        const data = await selectEventByEventLibraryId (eventLibraryId)
        return response.json({status:200, message: null, data})
    } catch (error) {
        return response.json({status:500, message: 'EventLibraryId does not exist.', data:[]})
    }
}

export async function getAllEventsOrderByEventDateController (request: Request, response: Response):Promise<Response<Status>> {
    try {
        const data = await selectAllEventsOrderByEventDate(eventDate)
        return response.json ({status:200, message:null, data})
    } catch (error) {
        return response.json ({status:500, message: 'Internal server error (3)', data:[]})
    }
}

export async function getEventByEventDate (request: Request, response: Response):Promise<Response<Status>> {
    try {
        const data = await selectEventByEventDate(eventDate)
        return response.json ({status:200, message:null, data})
    } catch (error) {
        return response.json ({status:500, message: 'Internal server error (3)', data:[]})
    }
}

export async function getEventByEventIdAndEventProfileId (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {eventId, eventLibraryId} = request.body
        const data = await selectEventByEventIdAndEventProfileId(eventId, eventLibraryId)
        return response.json({
            status: 200,
            message: '',
            data: null
        })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}


deleteEventByEventLibraryIdAndEventProfileId


