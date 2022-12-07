import React, { useState } from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import googleLogo from "../../../../../../images/uiSharedImages/google-logo-2.webp"
import {Link} from "react-router-dom";
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
                            <Col>
                                <div className={"w-45"}>
                                    <input type={"checkbox"} /> <span className={"ps-1"}>Remember Me</span>
                                </div>
                                <div className={"w-45"}>
                                    <a className={"text-decoration-none"} href={'/'}>Forgot Password</a>
                                </div>
                            </Col>
                            <Row>
                                <Col>
                                    <p className={"mt-3"}>&mdash; Sign In With &mdash;</p>
                                    <a href={"#"} className={"rounded-2"}><img src={googleLogo} className={"img-fluid"} alt={"Google Logo"}></img></a>
                                </Col>
                                <Col>
                                    <p className={"mt-3"}>&mdash; If Are You New &mdash;</p>
                                    <Link to={"/profile-registration"} className={"btn-primary"}> <Button> Create Account</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container id={"signUpIn"} className={""}>
                    <Row>
                        <Col className={"pb-2"}>
                            <p>By creating an account on our site you agree to our terms of use.</p>
                            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}
