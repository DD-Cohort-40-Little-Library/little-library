import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {BioBlock} from "./BioBlock";
import LLLLogo from "../../images/logoAssetsSVG/logoBase-xxs.svg";

export function AboutUs() {
    return (
        <>
        <Container fluid='auto' style={{padding: '2rem', marginBottom: '30px'}}>
            <Col>
            <Row style={{padding: '2rem', alignContent: 'center'}}>
                <Image fluid='auto' src={'../../images/llLogoTag.svg'} style={{height: "30rem", marginBottom: "20px"}}/>
            </Row>
            </Col>
            <Row>
                <h1 id={"headLineONE"}>About Us</h1>
                <p>The Little Library Locator was conceived as the course completion project for the CNM Deep Dive Coding Full Stack Web Development boot camp in the winter of 2022. The goal of the project is to bring communities together by refactoring the Little Libraries and Public Libraries in an easy-to-use application designed to provide a deeper community interaction.</p>
                <p>The Little Library Locator is proud to feature scheduling and displaying of community literacy events. In addition, registered users can check-in, allowing them to comment and upload photos in relation to the little libraries they visit. The map is rendered with specialized indicator pins that allow the user to quickly determine if a library is focused towards certain genres as well as visit library pages that contains more details. </p>
                <p>Our team is composed of four professionals derived from various fields. Together the team has over 125 years professional experience from management to fabrication. Embarking on the project with limited previous coding experience, the team worked hard to turn the vision into a reality in under 14 days. The support of our families, instructors, and classmates is something we are profoundly thankful for. We are proud of what we accomplished and would like to give our heartfelt gratitude.  </p>
                <p>- The Little Library Locator Team </p>
            </Row>
        </Container>

        <Container id={"personalStack"}>
            <Stack gap={5}>
                <Row style={{alignItems: "center"}}>
                <Col>
                    <Image src={"../../images/kelly-bowman.jpg"} roundedCircle='true' style={{height: "12rem"}}/>
                </Col>
                <Col sm={9}>
                    <h3>Kelly Bowman</h3>

                    <a target="_blank" href={"https://github.com/KSBowman"}><Image src={"../../images/git-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"https://www.linkedin.com/in/kelly-bowman/"}><Image src={"../../images/link-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"mailto:kelly@kelly-bowman.com?subject=I'd like to connect!&body=Hello Kelly. I'd like to connect!"}><Image src={"../../images/mail-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>

                    <p>Kelly has been in various management and supervisory positions ranging from retail environments to correctional settings and ending in Information Technology. Prior, he was a Network Administrator for the State of New Mexico where he was part of the team who developed and maintained the State's emergency response communications network. Kelly's transition from Network Administration to software development was driven by his unquenchable thirst to improve his skills and expand his knowledge base. He has since honed his skills and knowledge of JavaScript, TypeScript, React, Node.js, Express, GitHub, PostgreSQL, HTML and CSS.</p>
                </Col>
            </Row>
            <Row style={{alignItems: "center"}}>
                <Col>
                    <Image src={"../../images/nycole-davila.jpg"} roundedCircle='true' style={{height: "12rem"}}/>
                </Col>
                <Col sm={9}>
                    <h3>Nycole Davila</h3>

                    <a target="_blank" href={"https://github.com/Nyazdavila"}><Image src={"../../images/git-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"https://www.linkedin.com/in/nycole-davila"}><Image src={"../../images/link-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"mailto:iot.nycole.d@gmail.com?subject=I'd like to connect!&body=Hello Nycole. I'd like to connect!"}><Image src={"../../images/mail-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>

                    <p>Nycole's aspirations were originally in art design, but, out of necessity, found a place in banking. She attended The Art Institute in Seattle, Washington and earned a degree in Animation Arts and Design. Upon completion of her degree, Nycole returned home to Albuquerque, New Mexico, where she continued working for financial institutions such and Citi and Fidelity Investments. In 2019 Nycole decided to embark on a new adventure with a complete career change by joining the first cohort of the Internet of Things Deep Dive Coding Bootcamp provided by CNM Ingenuity, a program at Central New Mexico Community College. She spent the next couple of years gaining experience in fabrication, vinyl applications, metal, and woodworking. Once that experience was complete, she decided to rejoin the Deep Dive Coding community, this time enrolling in the Full Stack Web Development Bootcamp to gain new knowledge and deepen her coding skills.</p>
                </Col>
            </Row>
            <Row style={{alignItems: "center"}}>
                <Col>
                    <Image src={"../../images/bryce-roth.jpg"} roundedCircle='true' style={{height: "12rem"}}/>
                </Col>
                <Col sm={9}>
                    <h3>Bryce Roth</h3>

                    <a target="_blank" href={"https://github.com/BryceRoth22"}><Image src={"../../images/git-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"https://www.linkedin.com/in/bryce-roth-6a172620"}><Image src={"../../images/link-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"mailto:roth1116@gmail.com?subject=I'd like to connect!&body=Hello Bryce. I'd like to connect!"}><Image src={"../../images/mail-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>

                     <p>I am an experienced business professional with over 25 years of management and operations experience seeking to leverage my knowledge of data analytics, standardized procedures and business software as a junior web developer.  I recently graduated from Deep Dive Full Stack Web Development where I gained knowledge and skills on creating fully functional websites.  With my past experience I am regarded as a collaborative team leader maintaining a high level of personal and team performance.</p>
                </Col>
            </Row >
            <Row style={{alignItems: "center"}}>
                <Col>
                    <Image src={"../../images/matt-spriggs.jpg"} roundedCircle='true' style={{height: "12rem"}}/>
                </Col>
                <Col sm={9} >
                    <h3>Matt Spriggs</h3>

                    <a target="_blank" href={"https://github.com/mattspriggs"}><Image src={"../../images/git-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"https://www.linkedin.com/in/mattspriggs/"}><Image src={"../../images/link-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>
                    <a target="_blank" href={"mailto:matt.c.spriggs@gmail.com?subject=I'd like to connect!&body=Hello Matt. I'd like to connect!"}><Image src={"../../images/mail-bk-rd-1.svg"} style={{height: "2rem", paddingRight: "10px"}}/></a>

                    <p>Matt is a highly motivated professional with over 20 years of experience as a leader, entrepreneur, and manager.  On completion of the Full Stack Web Development Bootcamp, he will be relocating to New Zealand and entering the Tech Sector working on the Full Stack.</p>
                </Col>
            </Row>


            </Stack>
        </Container>
        </>
    )
}