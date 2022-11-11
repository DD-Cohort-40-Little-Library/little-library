import {NextFunction, Request, Response} from "express";
import {verify, VerifyErrors} from "jsonwebtoken";
import {Profile} from "../models/Profile";
import {IncomingHttpHeaders} from "http";
import {Status} from "../interfaces/Status";

export function isLoggedIn (request: Request, response: Response, next: NextFunction): any {
    const status: Status = { status:400, message: 'Please login', data:null }


    const sessionProfile = (request: Request): Profile |
        undefined => request.session?.profile ?? undefined
    console.log(request.sessionID)

    const signature = (request: Request): string => request.session?.signature ?? 'no signature'

    const isSessionActive = (isProfileActive: Profile | undefined): boolean => (isProfileActive !== undefined)

    const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {
    return headers.authorization
    }


    const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers)

    //const isJwtValid: boolean|void = unverifiedJwtToken
// ? verify (
// unverifiedJwtToken,
// signature(request),
//{maxAge: "3hr"}
//
//  )
// : false;


const isJwtVaild = (unverifiedJwtToken: string | undefined):
boolean => {
    if (unverifiedJwtToken === undefined){
        return false
    }
    const result: unknown = verify(
        unverifiedJwtToken,
        signature(request),
        { maxAge: '3hr'},
        (error: VerifyErrors | null): boolean => error == null
    ) as unknown

    return result as boolean
}

if (isJwtVaild(unverifiedJwtToken) && isSessionActive(sessionProfile(request))) {
 return next()
}
isJwtVaild(unverifiedJwtToken) && isSessionActive
(sessionProfile(request)) ? next() : response.json
(status)
}