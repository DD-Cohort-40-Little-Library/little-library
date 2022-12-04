import {sql} from '../database.utils'
import {Library} from "./Library";
import {TimeLike} from "fs";

export interface Event {
    eventId: string|null,
    eventLibraryId: string,
    eventProfileId: string,
    eventDate: Date|null,
    eventDescription: string|null,
    eventEnd: Date|null,
    eventStart: Date|null,
    eventTitle: string|null,
    eventType: string|null,
}

export async function insertEvent (event:Event): Promise<string> {
    const {eventLibraryId, eventProfileId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = event
    await sql `INSERT INTO event (event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type) VALUES(gen_random_uuid(), ${eventLibraryId}, ${eventProfileId}, ${eventDate}, ${eventDescription}, ${eventEnd}, ${eventStart}, ${eventTitle}, ${eventType})`
    return 'Event created successfully.'
}

export async function selectAllEventsOrderByEventDate (): Promise<Event[]> {
    return <Event[]> <unknown> await sql `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event ORDER BY event_date`
}


export async function selectAllEventsByEventProfileId (eventProfileId:string): Promise<Event[]> {
    return <Event[]> <unknown> await sql `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event  WHERE event_profile_id = ${eventProfileId} ORDER BY event_date`
}


export async function selectEventByEventLibraryId (eventLibraryId: string): Promise<Event[]> {
    return <Event[]> <unknown> await sql `SELECT event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_library_id = ${eventLibraryId} ORDER BY event_date`
}

export async function selectEventByEventProfileId (eventProfileId:string): Promise<Event[]> {
    return <Event[]> await sql `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_profile_id = ${eventProfileId}`
}

export async function updateEvent (event: Event): Promise<string> {
    const {eventId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = event
    await sql `UPDATE event SET event_date = ${eventDate}, event_description = ${eventDescription}, event_end = ${eventEnd}, event_start = ${eventStart}, event_title = ${eventTitle}, event_type = ${eventType} WHERE event_id = ${eventId}`
    return 'Event successfully updated'
}

export async function deleteEvent (event:Event): Promise<string> {
    const result = await sql `DELETE FROM event WHERE event_id = ${event.eventId}`
    if (result.count < 0) {
        return 'EventId does not exist.'
    }
    return 'EventId has been deleted.'
}

export async function selectEventByEventId (eventId: string): Promise<Event | null> {
    const result = <Event[]> await sql `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_id = ${eventId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectEventByEventDate (eventDate:Date): Promise<Event[]> {
    return <Event[]> <unknown> await sql `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_date = ${eventDate}`
}
