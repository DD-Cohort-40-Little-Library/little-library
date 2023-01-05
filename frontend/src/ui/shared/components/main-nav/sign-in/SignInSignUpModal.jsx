import React, { useState } from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import {SignInForm} from "./SignInForm.jsx";
import {SignUpForm} from "./SignUpForm.jsx";

export function SignInSignUpModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Sign In/Up</Button>
            <Modal show={show} onHide={handleClose} >
                <Container id={"signUpIn"} className={"signInUpModal"}>
                    <Row>
                        <Col>
                            <div>
                                <h4 className={"pt-3"}>Sign In/Up</h4>
                            </div>
                            <Modal.Body>
                                <SignInForm />
                                <SignUpForm />
                            </Modal.Body>
                        </Col>
                    </Row>
                </Container>
                <Container id={"signUpIn"} className={""}>
                    <Row>
                        <Col className={"pb-2"}>
                            <p>By creating an account on our site you agree to our terms of use.</p>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}
