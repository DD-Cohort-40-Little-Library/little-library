import {Col, Image, Row} from "react-bootstrap";
import React from "react";


export function BioBlock() {
    return (
        <>
        <Row>
            <Col>
                <Image src={'https://placekitten.com/g/200/200'} roundedCircle='true'/>
            </Col>
            <Col sm={9}>
                <h3>Name and Bio</h3>
                <p>Brisket biltong spare ribs, turducken t-bone buffalo tongue pork. Swine pastrami jerky buffalo pancetta. Fatback shankle cow boudin tail salami rump porchetta kielbasa bacon pork belly. Shoulder pig spare ribs kevin pancetta meatloaf, burgdoggen buffalo pork chop turkey hamburger bacon tenderloin jowl corned beef. Pastrami bacon filet mignon, venison corned beef tri-tip biltong fatback. Jowl turducken jerky biltong kielbasa alcatra. Hamburger bacon tail brisket turkey jerky short ribs buffalo ribeye pork beef tenderloin pig tongue.</p>

            </Col>
        </Row>
        </>
    )
}