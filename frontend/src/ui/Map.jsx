import React from 'react'

export function Map (){
	const [points] = React.useState([
		//First Little Library Record 2
		{ lat: 35.18154, lng:-106.4979},
		//Lomas Tramway Public Library Record 42
		{ lat: 35.08607, lng: -106.49758}
		])
	return (
		<>
			<Container className={'justify-content-center'} fluid={true}>
				<Map initialViewState={{
					latitude: 35.18,
					longitude: 106.49,
					zoom: 9
				}}
				mapboxAccessToken={import.meta.env.VITE_MAP_ACCESS_TOKEN}
				style={{width: 600, height: 400}}
				mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
				>
					{points.map((point, index) => <Pin lat={point.lat} lng={point.lng}
						index={index} key={index} />)}
			</Map>
			</Container>
		</>
	)
}
