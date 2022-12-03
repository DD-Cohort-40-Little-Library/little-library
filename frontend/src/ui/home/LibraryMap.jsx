import React, {useEffect, useState} from 'react'
import {MapPin} from "./MapPin.jsx";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Map from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../store/libraries.js";
import {Link} from "react-router-dom";
import {MapCustomPin} from "../shared/MapCustomPin.jsx";

export function LibraryMap (){
	//TODO: figure out how to feed the lat/lng for all libraries
	//TODO: Do we need a get library by lat/lng? Yes on second pass of the DB
	const libraries = useSelector(state => state.libraries ?? [])
	const dispatch = useDispatch()
	const initialEffects = () => {
		dispatch(fetchAllLibraries())
	}
	React.useEffect(initialEffects, [dispatch])

	return (
		<>
			<div className={'justify-content-center'}>
				<Map initialViewState={{
					latitude: 35.18,
					longitude: -106.49,
					zoom: 9
				}}
				            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
				            style={{width: 600, height: 400}}
				            mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
				>
					{libraries.map((libraries, index)=>
							<MapCustomPin libraries={libraries} index={index} key={index} />)}
				</Map>
			</div>
		</>
	)
}
