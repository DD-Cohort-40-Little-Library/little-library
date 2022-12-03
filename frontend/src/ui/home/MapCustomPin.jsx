import React, {useState} from "react";
import {Marker, Popup} from "react-map-gl";
import {Image} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import ReactDOM from "react-dom/client";


export function MapCustomPin(props) {

    const {
        libraries: {
            libraryLat: lat,
            libraryLng: lng,
            libraryName,
            libraryAddress,
            libraryDescription,
            librarySpecialization,
            libraryType
        }, index
    } = props

    const SIZE = 20;
    const [showPopup, setShowPopup] = useState(false)
    console.log(libraryType)
    return (
        <>
            <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
                setShowPopup(!showPopup)
                e.originalEvent.stopPropagation()
            }}>
                {libraryType === 'Little Library' &&  <Image src={`../images/icons-svg/little-library-pin.svg`}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{
                                                    transform: `translate(${-SIZE / 4}px,${-SIZE}px`
                                                }} />
                }
                {libraryType === 'Public Library' && <Image src={`../images/icons-svg/public-library-pin.svg`}
                                                            height={SIZE}
                                                            viewBox="0 0 24 24"
                                                            style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>}

            </Marker>

            {showPopup && (
                <Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30}
                       className={'libraryPopup'}>
                    <div>
                        <h2>{libraryName}</h2>
                        <p>{libraryAddress}</p>
                        <p>{libraryDescription}</p>
                        <p>{librarySpecialization}</p>
                        <p>{libraryType}</p>
                    </div>
                </Popup>
            )}
        </>
    )
}


