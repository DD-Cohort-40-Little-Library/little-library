import React from "react"
import {MapLibraryPinModal} from "./shared/components/map-library-pin-modal/MapLibraryPinModal";

export function Home() {
	return (
		<>
			<h1>Home</h1>
			<h2>TEST 1</h2>
			<p>Pretend there's a map here and a pin here <MapLibraryPinModal id="pin-modal"/> </p>
		</>
	)
}