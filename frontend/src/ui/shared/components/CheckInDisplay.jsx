import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";


export function CheckInDisplay() {
    return(
        <>
        <Container style={{marginBlock: '1rem', paddingBlock: '1rem', backgroundColor: 'lightgrey'}}>
            <Row style={{alignItems: 'center'}}>
                <Col md={2}>
                    <Image src={'https://placekitten.com/g/150/150'} roundedCircle={true}/>
                    <p>GooberWithABook</p>
                </Col>
                <Col md={7}>
                    <p>Tri-tip beef shankle swine, picanha fatback alcatra shoulder ground round jerky short loin. Drumstick bresaola porchetta pastrami buffalo. Meatball capicola ground round brisket. Chicken landjaeger capicola frankfurter sirloin.</p>
                </Col>
                <Col md={2}>
                    <Image src={'https://placekitten.com/g/200/200'} Square={true}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}