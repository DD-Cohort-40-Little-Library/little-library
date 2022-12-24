import React, {useState} from "react";
import {Marker, Popup} from "react-map-gl";
import {Image} from "react-bootstrap";
import little from "../../assets/icons-svg/little-library-pin.svg"
import publicLibrary from "../../assets/icons-svg/public-library-pin.svg"
import romance from "../../assets/icons-svg/romance-pin.svg"
import children from "../../assets/icons-svg/teddy-bear-pin.svg"
import homeImprovement from "../../assets/icons-svg/tools-pin.svg"
import fiction from "../../assets/icons-svg/alien-pin.svg"
import selfImprovement from "../../assets/icons-svg/mind-pin.svg"
import youngAdult from "../../assets/icons-svg/vampire-pin.svg"
import fantasy from "../../assets/icons-svg/unicorn-pin.svg"
import textTechnical from "../../assets/icons-svg/tech-pin.svg"
import religious from "../../assets/icons-svg/bible-pin.svg"
import nonFiction from "../../assets/icons-svg/castle-pin.svg"
import history from "../../assets/icons-svg/knight-pin.svg"
import art from "../../assets/icons-svg/art-pin.svg"
import cooking from "../../assets/icons-svg/pie-pin.svg"
import satire from "../../assets/icons-svg/drama-pin.svg"
import pets from "../../assets/icons-svg/animal-pin.svg"
import auto from "../../assets/icons-svg/jeep-pin.svg"
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
                {librarySpecialization === 'Little Library' && <Image src={little}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{
                                                transform: `translate(${-SIZE / 4}px,${-SIZE}px`}} />
                }

                {librarySpecialization === 'Public Library' && <Image src={publicLibrary}
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

                {librarySpecialization === 'Self Improvement' && <Image src={selfImprovement}
                                                               height={SIZE}
                                                               viewBox="0 0 24 24"
                                                               style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Young Adult' && <Image src={youngAdult}
                                                                        height={SIZE}
                                                                        viewBox="0 0 24 24"
                                                                        style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Fantasy' && <Image src={fantasy}
                                                                   height={SIZE}
                                                                   viewBox="0 0 24 24"
                                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Textbooks/Technical' && <Image src={textTechnical}
                                                                   height={SIZE}
                                                                   viewBox="0 0 24 24"
                                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Religious' && <Image src={religious}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Non-Fiction' && <Image src={nonFiction}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'History' && <Image src={history}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Art' && <Image src={art}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Cooking' && <Image src={cooking}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Satire' && <Image src={satire}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Pets/Animal' && <Image src={pets}
                                                                           height={SIZE}
                                                                           viewBox="0 0 24 24"
                                                                           style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Automotive' && <Image src={auto}
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
                        {/*<p>{libraryType}</p>*/}
                    </div>
                </Popup>
            )}
        </>
    )
}


