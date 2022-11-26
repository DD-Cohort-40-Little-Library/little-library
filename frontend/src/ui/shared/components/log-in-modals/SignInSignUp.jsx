import React, { useState } from 'react';
import {Button, Col, Container, Form, FormLabel, Modal, Row} from 'react-bootstrap';
import styles from "./sign-in-sign-up.module.css";
import googleLogo from "../../../../../images/uiSharedImages/google-logo-2.webp"
import {Link} from "react-router-dom";

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
                                <Row>
                                    <Col>
                                        <p className={"mt-3"}>&mdash; Sign In With &mdash;</p>
                                        <a href={"#"} className={"rounded-2"}><img src={googleLogo} className={"img-fluid"}></img></a>
                                    </Col>
                                    <Col>
                                        <p className={"mt-3"}>&mdash; If Are You New &mdash;</p>
                                        <Link to={"/profile-registration"} className={"btn-primary"}> <Button> Create Account</Button></Link>
                                    </Col>
                                </Row>
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
