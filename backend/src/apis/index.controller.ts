import {Request, Response} from "express"

export function indexController(request: Request, response: Response): Response {
    return response.json('🤯 😬 😱')
    // return response.json('Is this working?')
}