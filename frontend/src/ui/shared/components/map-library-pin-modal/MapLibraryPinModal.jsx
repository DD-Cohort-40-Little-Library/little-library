import React, { useState } from 'react';
import {Button, Col, Container, Form, FormLabel, Modal, Row} from 'react-bootstrap';
import styles from "./map-library-pin-modal.module.css";
import linkedin from "../../../../../images/uiSharedImages/linkedin-icon-classic-footer.webp";

export function MapLibraryPinModal() {

    //used to hold modal in place, remove to allow easy 'click-out' instead of a close button
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const library = Library
    // const libraryName = library.libraryName

    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>CHANGE BUTTON TO PIN</Button>*/}

            <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <Container className={"pt-3"}>
                            <Row className={"d-flex justify-content-center text-center"}>
                                <img className={"img-fluid"} src={"https://img.texasmonthly.com/2016/09/8403741198_e94c0c64c5_k.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250"} alt={"library pin/book"} />
                                <p>INSERT THE LIBRARY NAME HERE FROM THE DATABASE</p>
                            </Row>
                            <Row>
                                <Col className={"d-flex justify-content-around"}>
                                    <Button className={"d-flex justify-content-center"} >Library Details</Button>
                                </Col>
                            </Row>
                        </Container>
                        <Container className={"border border-1 border-dark my-2 p-2"}>
                            <Row className={"text-center"}>
                                <p>EMBED DESCRIPTION HERE</p>
                            </Row>
                            <Row className={"text-center"}>
                                <p>EMBED NEXT EVENT HERE</p>
                            </Row>
                        </Container>
                        <Container className={"pb-2 d-flex justify-content-around"}>
                            <Button >Comment</Button>
                            <Button >Quick Check-In</Button>
                        </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}


