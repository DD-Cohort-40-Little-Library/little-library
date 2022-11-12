import {Schema} from 'express-validator';


export const libraryValidator: Schema = {
    libraryId: {
        isUUID: {
            errorMessage: 'Please provide a valid libraryId.'
        }
    },
    libraryProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid libraryProfileId.'
        }
    },
    libraryAddress: {
        isLength: {
            errorMessage: 'A libraryAddress must be between 1 and 258 characters.',
            options: {min: 1, max: 258}
        },
        trim: true,
        escape: true
    },
    libraryDescription: {
        isLength: {
            errorMessage: 'A libraryDescription must be less than 256.',
            options: {max: 256}
        },
        trim: true,
        escape: true
    },
    libraryEventOptIn: {
        isBoolean: {
            errorMessage: 'Please submit either true or false.',
        },
    },
    libraryName: {
        isLength: {
            errorMessage: 'A libraryName must be between 1 and 128 characters.',
            options: {min: 1, max: 128},
        },
        trim: true,
        escape: true
    },
    librarySpecialization: {
        isLength: {
            errorMessage: 'A librarySpecialization must be less than 64 characters.',
            options: {max: 64}
        },
        trim: true,
        escape: true
    },
}























