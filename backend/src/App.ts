import express, { Application } from 'express'
import morgan from 'morgan'

// Routes
import { indexRoute } from './apis/index.route'
import session from 'express-session'
import { createClient } from 'redis'
import RedisConnect from 'connect-redis'
import {signUpRoute} from "./apis/sign-up/sign-up.route";
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import {SignOutRoute} from "./apis/sign-out/sign-out.route";
import {ProfileRoute} from "./apis/profile/profile.route";
import {libraryRoute} from "./apis/library/library.route";
import {checkInRoute} from "./apis/check-in/check-in.route";
import {ImageUploadRouter} from "./apis/image-upload/image-upload.route";



import {eventRoute} from "./apis/events/event.route";


const redisClient = createClient({ legacyMode: true, socket: { host: process.env.REDIS_HOST } })
redisClient.connect().catch(console.error)
const RedisStore = RedisConnect(session)

// The following class creates the app and instantiates the server
export class App {
    app: Application

    constructor(
        private readonly port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings(): void {
        this.app.set('port', this.port)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares(): void {
        const sessionConfig = {
            store: new RedisStore({client: redisClient, host: process.env.REDIS_HOST, port: 6379}),
            saveUninitialized: true,
            secret: process.env.SESSION_SECRET as string,
            resave: false

        }

        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig))
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes(): void {
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/sign-up', signUpRoute)
        this.app.use('/apis/sign-in', SignInRouter)
        this.app.use('/apis/event', eventRoute)
        this.app.use('/apis/sign-out', SignOutRoute)
        this.app.use('/apis/profile', ProfileRoute)
        this.app.use('/apis/image-upload', ImageUploadRouter)
        this.app.use('/apis/check-in', checkInRoute)
        this.app.use('/apis/library', libraryRoute)

    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}