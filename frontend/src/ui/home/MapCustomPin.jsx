import React, {useState} from "react";
import {Marker, Popup} from "react-map-gl";
import {Image} from "react-bootstrap";
import little from "../../assets/icons-svg/little-library-pin.svg"
import publicLibrary from "../../assets/icons-svg/public-library-pin.svg"
import romance from "../../assets/icons-svg/romance-pin.svg"
import children from "../../assets/icons-svg/baby-pin.svg"
import homeImprovement from "../../assets/icons-svg/tools-pin.svg"
import fiction from "../../assets/icons-svg/alien-pin.svg"
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
    return (
        <>
            <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
                setShowPopup(!showPopup)
                e.originalEvent.stopPropagation()
            }}>
                {librarySpecialization === 'null' && <Image src={little}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{
                                                transform: `translate(${-SIZE / 4}px,${-SIZE}px`}} />
                }

                {librarySpecialization === 'Public' && <Image src={publicLibrary}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Romance' && <Image src={romance}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Children' && <Image src={children}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Home Improvement' && <Image src={homeImprovement}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Fiction' && <Image src={fiction}
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


