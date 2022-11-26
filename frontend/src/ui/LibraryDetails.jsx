import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import {Col, Container, Image, Row, Stack} from "react-bootstrap";

export function LibraryDetails() {
    return (
        <Container style={{paddingBlock: '2rem'}}>
        <Card className="text-center">
            <Card.Header>Library Location Details and Type</Card.Header>
            <Card.Body>
                <Image src={'https://placekitten.com/g/200/200'} roundedCircle={true}/>
                <Card.Title>Special Library Text</Card.Title>
                <Card.Text>
                    <p>Spicy jalapeno bacon ipsum dolor amet brisket venison swine drumstick kevin leberkas porchetta doner. Andouille burgdoggen porchetta buffalo. Turducken beef porchetta, kevin tri-tip bacon pig t-bone strip steak turkey meatball venison corned beef bresaola pork loin. Ball tip corned beef doner t-bone beef, pork belly frankfurter boudin short loin turducken spare ribs fatback rump buffalo.</p>
                    <p>Tri-tip beef shankle swine, picanha fatback alcatra shoulder ground round jerky short loin. Drumstick bresaola porchetta pastrami buffalo. Meatball capicola ground round brisket. Chicken landjaeger capicola frankfurter sirloin.</p>
                </Card.Text>
                <Row>
                <Col md={7} style={{padding: '1rem'}}>
                <Button variant="primary">Check In</Button>
                </Col>
                <Col md={3} style={{padding: '1rem'}}>
                <Button variant="primary">Sign Guest Book</Button>
                </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">Next Event in 3 Days</Card.Footer>
        </Card>
        </Container>
    );
}

