import {sql} from '../database.utils';
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

export async function insertEvent (event:Event) {
    const {eventId, eventLibraryId, eventProfileId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = event
    await sql `INSERT INTO event (event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type) VALUES(gen_random_uuid(), ${eventLibraryId}, ${eventProfileId}, ${eventDate}, ${eventDescription}, ${eventEnd}, ${eventStart}, ${eventTitle}, ${eventType}) WHERE`


    **************** FIND A WAY TO ONLY ALLOW OPTED IN LIBRARIES ****************
    **************** SOME ITEMS NOT 'const'd DUE TO EXAMPLE EXCLUDING THERE RETURN TYPE *****

    return 'Event created successfully.'

}


export async function selectAllEventsOrderByEventDate (eventDate:Date): Promise<Event[]> {
    return sql<Event[]>`SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event ORDER BY date`
}

export async function selectEventByEventLibraryId (libraryId: string): Promise<Event[]> {
    return sql<Event[]> `SELECT event_library_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_library_id = ${eventLibraryId} ORDER BY event_date`
}


//****************************same as library by library and profileId, we verify twice*************
export async function selectEventByEventIdAndEventProfileId (profileId:string): Promise<Event[]> {
    return sql<Event[]>`SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_id = ${eventId} AND event_profile_id = ${eventProfileId}`
}

export async function updateEvent (event: Event): Promise<string> {
    const {eventId, eventDate, eventDescription, eventEnd, eventStart, eventTitle, eventType} = event
    await sql `UPDATE event SET event_date = :eventDate, event_description = :eventDescription, event_end = :eventEnd, event_start = :eventStart, event_title = :eventTitle, event_type = :eventType WHERE event_id = :eventId`
    return 'Event successfully updated'
}

//****************************same as library by library and profileId, we verify twice*************
export async function deleteEventByEventLibraryIdAndEventProfileId (eventLibraryId:Event): Promise<string> {
    const result = await sql `DELETE FROM event WHERE event_library_id = ${eventLibraryId} AND event_profile_id = ${eventProfileId}`
    if (result.count < 0) {
        return 'EventId does not exist.'
    }
    return 'EventId has been deleted.'
}

export async function selectEventByEventId (eventId: string): Promise<Event[]> {
    return await sql<Event[]> `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_id = ${eventId}`
}

export async function selectEventByEventDate (eventDate:Date): Promise<Event[]> {
    return sql<Event[]>`SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_date = :eventDate`
}