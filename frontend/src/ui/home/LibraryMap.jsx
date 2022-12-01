import React, {useEffect, useState} from 'react'
import {MapPin} from "./MapPin.jsx";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Map from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../store/libraries.js";
import {Link} from "react-router-dom";

export function LibraryMap (){
	//TODO: figure out how to feed the lat/lng for all libraries
	//TODO: Do we need a get library by lat/lng? Yes on second pass of the DB
	const libraries = useSelector(state => state.libraries ? state.libraries : [])
	const dispatch = useDispatch()
	const initialEffects = () => {
		dispatch(fetchAllLibraries())
	}
	useEffect(initialEffects, [dispatch])
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Container className={'justify-content-center'} fluid={true}>
				<Map initialViewState={{
					latitude: 35.18,
					longitude: -106.49,
					zoom: 9
				}}
				            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
				            style={{width: 600, height: 400}}
				            mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
				>
					{libraries.map(library =><MapPin lat={library.libraryLat} lng={library.libraryLng} key={library.libraryId} onClick ={handleShow}/>,
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

					)}
				</Map>
			</Container>
		</>
	)
}
