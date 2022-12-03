import React from 'react'
import Map from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../store/libraries.js";
import {MapCustomPin} from "./MapCustomPin.jsx";

export function LibraryMap (){

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
							<MapCustomPin libraries={libraries} index={index} key={index} />
					)}
				</Map>
			</div>
		</>
	)
}
