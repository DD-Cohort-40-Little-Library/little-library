import {Schema} from "express-validator"

export const signUpValidator: Schema = {
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Profile name must be between 0 and 128 characters.',
            options:{min: 1, max:128}
        },
        optional:{
            options: {
                nullable: false,
            }
        }
    },
    profileEmail: {
        isEmail:{
            errorMessage: 'Please provide a valid eMail address.'
        },
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Profile email must be between 0 and 132 characters.',
            options:{min: 1, max:132}
        },
        optional:{
            options: {
                nullable: false
            }
        }
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8, max: 200 }
        }

    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8, max: 200 }
        },
        custom: {
            errorMessage: 'Password confirmation does not match password',
            options: (value, { req, location, path }) => {
                if (value !== req.body.profilePassword) {
                    throw new Error('Password confirmation does not match password')
                }
                // Indicates the success of this synchronous custom validator
                return true
            }
        }
    },
}
