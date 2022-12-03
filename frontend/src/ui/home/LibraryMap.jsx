import React, {useEffect, useState} from 'react'
import {MapPin} from "./MapPin.jsx";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Map from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../store/libraries.js";
import {Link} from "react-router-dom";


const styles = {
	map:{
		height: "50vh",
		width: "auto",
		position: "relative"
	},
	// mapbox:{
	// 	position: "relative",
	// }
}

export function LibraryMap (){
	//TODO: Do we need a get library by lat/lng? Yes on second pass of the DB
	const libraries = useSelector(state => state.libraries ?? [])
	const dispatch = useDispatch()
	const initialEffects = () => {
		dispatch(fetchAllLibraries())
	}
	React.useEffect(initialEffects, [dispatch])

	return (
		<>
			<div className={'justify-content-center'} style={styles.mapbox} >
				<Map initialViewState={{
					latitude: 35.18,
					longitude: -106.49,
					zoom: 9
				}}
				            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
				            mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
					 		style={styles.map}
				>
					{libraries.map((libraries, index)=>
							<MapPin libraries={libraries} index={index} key={index} />)}
				</Map>
			</div>
		</>
	)
}
