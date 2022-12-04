import {Schema} from 'express-validator'

export const eventValidator: Schema = {
    eventLibraryId: {
        isUUID: {
            errorMessage: 'Please provide a valid eventLibraryId'}
    },
    eventDate:{
        isISO8601: true,
        errorMessage: 'Event date is malformed.'
    },
    eventDescription: {
        isLength: {
            errorMessage: 'A description must be less than 256 characters.',
            options: {max: 256}
        }
    },
    eventEnd: {
        isISO8601: true,
        errorMessage: 'Event end time is malformed.'

    },
    eventStart: {
        isISO8601: true,
        errorMessage: 'Event start time is malformed.'

    },
    eventTitle: {
        isLength: {
            errorMessage: 'A title must be less than 128 characters.',
            options: { max: 128 }
        }
    },
    eventType: {
        isLength: {
            errorMessage: 'An eventType must be less than 128 characters.',
            options: { max: 128}
            }
        },
}