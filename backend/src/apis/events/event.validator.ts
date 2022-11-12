import {Schema} from 'express-validator'

export const eventValidator: Schema = {
    eventLibraryId: {
        isUUID: {
            errorMessage: 'Please provide a valid eventLibraryId'}
        }
    eventProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid eventProfileId.'}
    },
    eventDate:{
        toDate: true
    },
    eventDescription: {
        isLength: {
            errorMessage: 'A description must be less than 256 characters.',
            options: {max: 256}
        }
    },
    eventEnd: {
            toDate: true
    },
    eventStart: {
            toDate: true
    },
    eventTitle: {
        isLength: {
            errorMessage: 'A title must be less than 128 characters.',
            options: { max: 128 }
        }
    },
    eventType: {
                boolean: 'true' | false
    },
}