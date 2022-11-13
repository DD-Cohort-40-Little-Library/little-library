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

export async function insertEvent (event:Event): Promise<string> {
    const {eventLibraryId, eventProfileId, eventDescription, eventTitle, eventType} = event
    await sql `INSERT INTO event (event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type) VALUES(gen_random_uuid(), ${eventLibraryId}, ${eventProfileId}, ${eventDate}, ${eventDescription}, ${eventEnd}, ${eventStart}, ${eventTitle}, ${event_type}) WHERE`


    **************** FIND A WAY TO ONLY ALLOW OPTED IN LIBRARIES ****************
    **************** SOME ITEMS NOT 'const'd DUE TO EXAMPLE EXCLUDING THERE RETURN TYPE *****

    return 'Event created successfully.'

}


export async function selectAllEventsOrderByDate
GET| `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event ORDER BY date`



selectEventsByLibraryId
GET| `SELECT event_library_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_library_id = ${eventLibraryId} ORDER BY event_date`


selectEventByEventIdByEventProfileId
GET| `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_id = ${eventId} AND event_profile_id = ${eventProfileId}`


updateEvent
PUT| `UPDATE event SET event_date = :eventDate, event_description = :eventDescription, event_end = :eventEnd, event_start = :eventStart, event_title = :eventTitle, event_type = :eventType WHERE event_id = :eventId`



deleteEventByEventLibraryIdAndEventProfileId
DELETE| `DELETE FROM event WHERE event_id = ${eventId} AND event_profile_id = ${eventProfileId}



selectEventById
GET| `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_id = ${eventId}`




selectEventByDate
GET| `SELECT event_id, event_library_id, event_profile_id, event_date, event_description, event_end, event_start, event_title, event_type FROM event WHERE event_date = :eventDate`
