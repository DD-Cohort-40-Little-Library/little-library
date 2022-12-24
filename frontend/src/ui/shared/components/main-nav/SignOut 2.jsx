import React from "react";
import {useDispatch} from "react-redux";
import {httpConfig} from "../../utils/http-config.js";
import {getAuth} from "../../../../store/auth.js";
import {Button} from "react-bootstrap";

export const SignOutComponent = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location = '/'
            }
        })
    }
    return(
        <>
            <div className="dropdown-item sign-out-dropdown">
                <Button className={""}  variant="secondary" onClick={signOut}>
                    Sign Out
                </Button>
            </div>
        </>
    )
}
