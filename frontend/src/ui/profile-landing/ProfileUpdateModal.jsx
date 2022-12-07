import React, { useState } from 'react';
import {Button, Container, Modal, Row} from 'react-bootstrap';
import {ProfileUpdateForm} from "./ProfileUpdateForm.jsx";

export function ProfileUpdateModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Update Profile</Button>

            <Modal className={""} show={show} onHide={handleClose} >
                <Container>
                    <Row>
                        <div>
                            <h4 className={"text-center"}>Update Profile</h4>
                        </div>
                        <Modal.Body>
                            <ProfileUpdateForm/>
                        </Modal.Body>
                    </Row>
                </Container>
            </Modal>
        </>
    );
}
