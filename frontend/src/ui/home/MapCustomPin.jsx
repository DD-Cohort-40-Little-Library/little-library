import React, {useState} from "react";
import {Marker, Popup} from "react-map-gl";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";


export function MapCustomPin(props) {

    const {
        libraries: {
            libraryId,
            libraryLat: lat,
            libraryLng: lng,
            libraryName,
            libraryAddress,
            librarySpecialization,
            libraryType
        }, index
    } = props

    const SIZE = 30;
    const [showPopup, setShowPopup] = useState(false)
    console.log(libraryType)
    return (
        <>
            <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
                setShowPopup(!showPopup)
                e.originalEvent.stopPropagation()
            }}>
                {librarySpecialization === 'null' && <Image src={`../images/icons-svg/little-library-pin.svg`}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{
                                                transform: `translate(${-SIZE / 4}px,${-SIZE}px`}} />
                }

                {librarySpecialization === 'Public' && <Image src={`../images/icons-svg/public-library-pin.svg`}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Romance' && <Image src={`../images/icons-svg/romance-pin.svg`}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Children' && <Image src={`../images/icons-svg/teddy-bear-pin.svg`}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Home Improvement' && <Image src={`../images/icons-svg/tools-pin.svg`}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Fiction' && <Image src={`../images/icons-svg/alien-pin.svg`}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
            </Marker>

            {showPopup && (
                <Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30}
                       className={'libraryPopup'}>
                    <div>
                        <Link to={`/library-landing/${libraryId}`}><h2>{libraryName}</h2></Link>
                        <p>{libraryAddress}</p>
                        <p>{librarySpecialization}</p>
                        <p>{libraryType}</p>
                    </div>
                </Popup>
            )}
        </>
    )
}


