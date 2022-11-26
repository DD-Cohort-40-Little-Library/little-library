import {Col, Image, Row} from "react-bootstrap";
import React from "react";
import {LibraryDetails} from "./LibraryDetails";


export function LibraryDetailBlock() {
    return (
        <>
            <Row>
                <Col>
                    <Image src={'https://placekitten.com/g/200/200'} roundedCircle='true' alt={'Library Picture'}/>
                </Col>
                <Col sm={9}>
                    <h3>PULL NAME FROM DATA</h3>
                    <p>PULL DETAILS FROM DATA</p>

                </Col>
            </Row>
        </>
    )
}