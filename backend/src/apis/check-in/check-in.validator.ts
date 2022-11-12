import {Schema} from 'express-validator';

export const checkInValidator: Schema = {

    checkInLibraryId: {
        isUUID: {
            errorMessage: 'please provide a valid checkInLibraryId'
        }
    },

    checkInProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid CheckInProfileId'
        }
    },

    checkInComment: {
        isLength:{
            errorMessage: 'A checkInComment cannot be more than 256 characters',
            options: { min:1, max: 256 }
        },
        trim: true,
        escape: true
    },

    checkInDate: {
        toDate: true
    },

    checkInPhotoName: {
        isLength:{
            errorMessage: 'A checkInPhotoName cannot be more than 128 characters'
        }
    }
}