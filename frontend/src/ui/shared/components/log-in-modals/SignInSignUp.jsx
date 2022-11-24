import React, { useState } from 'react';
import {Button, Col, Container, Form, FormLabel, Modal, Row} from 'react-bootstrap';
import styles from "./sign-in-sign-up.module.css";
import googleLogo from "../../uiSharedImages/google-logo-2.webp"

export function SignInSignUpModal() {
    const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="primary" onClick={handleShow}>Sign In</Button>

                <Modal className={""} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Container className={styles.signInModalColor}>
                        <Row className={styles.signInModalText}>
                            <Col >
                                <div>
                                    <h4 className={"pt-3 "}>Sign In</h4>
                                </div>
                                <Modal.Body>
                                    <Form>
                                        <Row>
                                            <input type={"username"} className={"form-control my-1"} placeholder={"Username"}/>
                                        </Row>
                                        <Row>
                                            <input type={"password"} className={"form-control my-1"} placeholder={"Password"}/>
                                        </Row>
                                        <div className={""}>
                                            <Button type={"submit"} className={"btn-primary btn rounded-2 "}>Submit</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                                <Col>
                                    <div className={"w-45"}>
                                        <input type={"checkbox"} /> <span className={"ps-1"}>Remember Me</span>
                                    </div>
                                    <div className={"w-45"}>
                                        <a className={"text-decoration-none"} href={'/'}>Forgot Password</a>
                                    </div>
                                </Col>
                                <p className={"mt-3"}>&mdash; Or Sign In With &mdash;</p>
                                <a href={"#"} className={"rounded-2"}><img src={googleLogo} className={"img-fluid"}></img></a>
                            </Col>
                            <Col>
                                <div>
                                    <h4 className={"pt-3"}>Sign Up</h4>
                                </div>
                                <Modal.Body>
                                    <Form>
                                        <Row>
                                            <input type={"text"} className={"form-control my-1"} placeholder={"First Name"}/>
                                        </Row>
                                        <Row>
                                            <input type={"text"} className={"form-control my-1"} placeholder={"Last Name"}/>
                                        </Row>
                                        <Row>
                                            <input type={"username"} className={"form-control my-1"} placeholder={"Profile Name"}/>
                                        </Row>
                                        <Row>
                                            <input type={"email"} className={"form-control my-1"} placeholder={"Profile Email"}/>
                                        </Row>
                                        <Row>
                                            <input type={"password"} className={"form-control my-1"} placeholder={"Password"}/>
                                        </Row>
                                        <Row>
                                            <input type={"password"} className={"form-control my-1"} placeholder={"Confirm Password"}/>
                                        </Row>
                                        <div className={""}>
                                            <Button type={"submit"} className={"btn-primary btn rounded-2"}>Submit</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={styles.signInModalColor}>
                        <Row>
                            <Col className={"pb-2"}>
                                <p className={styles.signInModalText}>By creating an account on our site you agree to our terms of use.</p>
                                <Button className={styles.signInModalText} variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </>
        );
    }
