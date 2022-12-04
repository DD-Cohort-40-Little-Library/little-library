import React from 'react'
import Map from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../store/libraries.js";
import {MapCustomPin} from "./MapCustomPin.jsx";


const styles = {
	map:{
		height: "40rem",
		width: "flex",
		position: "flex"
	},
}

export function LibraryMap (){


	const libraries = useSelector(state => state.libraries ?? [])
	const dispatch = useDispatch()
	const initialEffects = () => {
		dispatch(fetchAllLibraries())
	}
	React.useEffect(initialEffects, [dispatch])

	return (
		<>
			<div className={'justify-content-center'} id={'mapbox'} >
				<Map initialViewState={{
					latitude: 35.12,
					longitude: -106.64,
					zoom: 10.5
				}}
				            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
				            mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
					 		style={styles.map}
				>
					{libraries.map((libraries, index)=>
							<MapCustomPin libraries={libraries} index={index} key={index} />
					)}
				</Map>
			</div>
		</>
	)
}
