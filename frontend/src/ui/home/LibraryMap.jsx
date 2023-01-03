import React from 'react'
import Map from "react-map-gl";
import {MapCustomPin} from "./MapCustomPin.jsx";


const styles = {
	map:{
		height: "100vh",
		width: "100%",
	},
	mapBox:{
		height: "100vh",
		width: "100%",
	}
}

export function LibraryMap (libraries){

	return (
		<>
			<div className={'mapDisplay'} style={styles.mapbox} >

				<Map initialViewState={{
					latitude: 35.13,
					longitude: -106.65,
					zoom: 10
				}}
					 mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
					 mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
					 style={styles.map}
				>
					{/*{libraries.map((libraries, index)=>*/}
					{/*	<MapCustomPin libraries={libraries} index={index} key={index} />*/}
					{libraries.map (library => <MapCustomPin libraries={libraries} key={library.libraryId}/>)}

					)}
				</Map>
			</div>
		</>
	)}
