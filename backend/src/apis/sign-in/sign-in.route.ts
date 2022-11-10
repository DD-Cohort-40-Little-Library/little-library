import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signUpValidator} from "../sign-up/sign-up.validator";
import {signInController} from "./sign-in.controller";
import {signInValidator} from "./sign-in.validator";

export const SignInRouter:Router = Router()

SignInRouter.route('/')
.post(asyncValidatorController(checkSchema(signInValidator)),
    signInController)