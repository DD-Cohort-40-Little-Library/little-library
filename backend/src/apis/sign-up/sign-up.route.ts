import {Router} from "express";
import {checkSchema, param} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signUpValidator} from "./sign-up.validator";
import {signUpController} from "./sign-up.controller";
import {activationController} from "./activation.controller";

export const signUpRoute= Router()
signUpRoute.route('/').post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signUpController
)


// router.route('/')
//     .post(
//         asyncValidatorController(checkSchema(signUpValidator)),
//         signupProfileController
//     )

signUpRoute.route('/activation/:activation')
  .get(
      asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
      activationController
  )
