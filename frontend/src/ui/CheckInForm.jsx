import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, InputGroup, Row} from "react-bootstrap";

export function CheckInForm() {
    return (
        <>
        <Container style={{paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
        <Form>
            <fieldset>
                <InputGroup>
                    <InputGroup.Text>Enter Comments Here</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="commentText" rows={4}/>
                </InputGroup>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="FieldsetCheck"
                        label="Report Damage to Library Owner"
                    />
                    <Form.Text id="CommentRules" muted>
                        Your comments must be 8-255 characters long. Your comments will be displayed and monitored. Please refrain from using offensive language and hate speech. Thank you.
                    </Form.Text>
                </Form.Group>
                <Row>
                <Col md={10} style={{padding: '1rem'}}>
                <Button type="submit">Submit</Button>
                </Col>
                <Col md={2} style={{padding: '1rem'}}>
                <Button type="button">Upload Photo</Button>
                </Col>
                </Row>
            </fieldset>
        </Form>
        </Container>
        </>
    );
}

