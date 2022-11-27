import React, {useState} from 'react'
import {Button, Card, Col, Figure, Form, Row} from "react-bootstrap";

export const LibraryCreate = () => {
	return(
		<>
			<Form>
			<div fluid="true">
				<div className={"text-center"}>
					<h1>Register Your Library</h1>
				</div>

				{/*Row 1 with User image and upload image*/}
				<Row className={"mx-0"}>
					<Col md={5} className={"m-2 text-center"}>
						<Figure fluid="true">
							<Figure.Image
								alt={"placeholder kitten"}
								src={"http://placekitten.com/210/210"}
								roundedCircle={true}
								/>
							<Figure.Caption className={"text-center"}>userName</Figure.Caption>
						</Figure>
						<Card>

						</Card>
					</Col>
					<Col md={5} className={"m-2 text-center"}>
						<Figure fluid="true">
							<Figure.Image

								alt={"placeholder kitten"}
								src={"http://placekitten.com/200/200"}
							/>
							<Figure.Caption className={"text-center"}><Button size="sm" variant={"outline-secondary"} >Upload</Button></Figure.Caption>
						</Figure>
						<Card>

						</Card>
					</Col>
				</Row>
			</div>
			</Form>
		</>
	)
}