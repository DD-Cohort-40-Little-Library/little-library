import {Request, Response} from "express"
import Mailgun from "mailgun.js"
import formData from 'form-data'
import {setActivationToken, setHash} from "../../utils/auth.utils"
import {insertProfile, Profile} from "../../utils/models/Profile"

export async function signUpController(request: Request, response: Response) {
    try {
        const mailGun = new Mailgun(formData)
        const mailGunClient = mailGun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})
        const {
            profileEmail,
            profileFirstName,
            profileLastName,
            profileName,
            profilePassword,
        } = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}${request.originalUrl}/activation/${profileActivationToken}`
        const message = `<h2>Welcome to the Little Library Locator!</h2>
        In order to fully interact with the Little Library Locator, you must confirm your account first by 
        <a href="${basePath}">following this link.</a>
        
        If you feel that you received this email in error please notifiy Info@LittleLibraryLocator.com.
        
        Thank you for doing your part in expanding literacy in your community from the crew at the Little Library Locator!`
        const mailGunMessage = {
            from: `Little Library Locator <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'Account verification for Little Library Locator.',
            html: message
        }
        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileAvatarUrl: null,
            profileEmail,
            profileFirstName,
            profileHash,
            profileLastName,
            profileName,
        };
        const successMessage = await insertProfile(profile)
        await mailGunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailGunMessage)
        return response.json({status: 200, message: 'Profile successfully created.', data: null})
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}
