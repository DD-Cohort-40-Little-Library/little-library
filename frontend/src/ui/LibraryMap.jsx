import React from 'react'
import {MapPin} from "./MapPin.jsx";
import {Container} from "react-bootstrap";
import Map from "react-map-gl";

export function LibraryMap (){
	//TODO: figure out how to feed the lat/lng for all libraries
	//TODO: Do we need a get library by lat/lng? Yes on second pass of the DB
	const [points] = React.useState([
		//First Little Library Record 2
		{ lat: 35.18154, lng:-106.4979},
		//Lomas Tramway Public Library Record 42
		{ lat: 35.08607, lng: -106.49758}
		])
	// console.log(import.meta.env.VITE_MAP_ACCESS_TOKEN)
	return (
		<>
			<h1>Map</h1>
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
					{points.map((point, index) => <MapPin lat={point.lat} lng={point.lng}
						index={index} key={index} />)}
			</Map>
			</Container>
		</>
	)
}
