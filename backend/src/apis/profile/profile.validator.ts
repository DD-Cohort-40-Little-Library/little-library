import {Schema} from "express-validator"

export const profileValidator: Schema = {
    profileId: {
    isUUID: {
        errorMessage: 'please provide a valid ProfileId'
    }
  },

    profileAvatarUrl: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'profile avatar is malformed please upload a new image'
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        trim: true
    },

    profileFirstName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileFirstName must be between one and thirty two characters',
            options: {min: 1, max: 32}
        }
    },

    profileLastName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileLastName must be between one and thirty two characters',
            options: {min: 1, max: 32}
        }
    },

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between one and thirty two characters',
            options: {min: 1, max: 32}
        }
    }
}
