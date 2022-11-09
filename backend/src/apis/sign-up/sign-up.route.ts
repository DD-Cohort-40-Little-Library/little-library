import {Router} from "express";
import {checkSchema} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signUpValidator} from "./sign-up.validator";
import {signUpController} from "./sign-up.controller";
export const signUpRoute= Router()
signUpRoute.route('/').post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signUpController
)