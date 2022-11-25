import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {BioBlock} from "./BioBlock";

export function AboutUs() {
    return (
        <>
        <Container fluid='auto' style={{padding: '2rem'}}>
            <Col>
            <Row style={{padding: '2rem', alignContent: 'center'}}>
                <Image fluid='auto' src={'https://placekitten.com/g/400/400'} />
            </Row>
            </Col>
            <Row>
                <h1 style={{padding: '1rem',}}>About Us</h1>
                <p>Spicy jalapeno bacon ipsum dolor amet flank shankle rump bacon. Short ribs meatloaf chicken swine rump. Boudin corned beef capicola, strip steak brisket rump leberkas beef ham hock venison. Filet mignon t-bone ribeye tail ball tip meatball beef alcatra burgdoggen flank. Kevin pork belly corned beef, jerky bresaola short ribs leberkas short loin beef ribs burgdoggen. Short loin picanha landjaeger tri-tip turkey rump pastrami meatloaf strip steak boudin. Bresaola shank flank, meatloaf doner shankle capicola filet mignon pancetta pastrami landjaeger porchetta tail kielbasa.</p>
                <p>Brisket biltong spare ribs, turducken t-bone buffalo tongue pork. Swine pastrami jerky buffalo pancetta. Fatback shankle cow boudin tail salami rump porchetta kielbasa bacon pork belly. Shoulder pig spare ribs kevin pancetta meatloaf, burgdoggen buffalo pork chop turkey hamburger bacon tenderloin jowl corned beef. Pastrami bacon filet mignon, venison corned beef tri-tip biltong fatback. Jowl turducken jerky biltong kielbasa alcatra. Hamburger bacon tail brisket turkey jerky short ribs buffalo ribeye pork beef tenderloin pig tongue.</p>
            </Row>
        </Container>
        <Container>
            <Stack gap={5}>
                <BioBlock/>
                <BioBlock/>
                <BioBlock/>
                <BioBlock/>
            </Stack>
        </Container>
        </>
    )
}