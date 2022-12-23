import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {httpConfig} from "../../utils/http-config.js";
import {getAuth} from "../../../../store/auth.js";
import {Button, Modal, Row} from "react-bootstrap";

export const SignOutComponent = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const signOut = () => {

        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                // window.location = '/'
            }
        });
    }

    const signOutPop = () => {
        handleShow(),
        signOut()
    }

    const signOutMain = () =>{
        handleClose(),
        window.location = '/'
    }

    return(
        <>
            <div className="dropdown-item sign-out-dropdown">
                <Button className={""}  variant="secondary" onClick={signOutPop}>
                    Sign Out
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Row>
                        <h2 className={"text-center"}>You are Now Signed Out</h2>
                    </Row>

                    <Modal.Footer>
                        <Button variant="light" onClick={signOutMain}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}
