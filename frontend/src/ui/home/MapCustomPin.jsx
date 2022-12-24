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
import history from "../../assets/icons-svg/knight-pin.svg"
import art from "../../assets/icons-svg/art-pin.svg"
import cooking from "../../assets/icons-svg/pie-pin.svg"
import satire from "../../assets/icons-svg/drama-pin.svg"
import pets from "../../assets/icons-svg/animal-pin.svg"
import auto from "../../assets/icons-svg/jeep-pin.svg"
import horror from "../../assets/icons-svg/ghost-face-pin.svg"
import nature from "../../assets/icons-svg/leaf-pin.svg"
import fitness from "../../assets/icons-svg/fitness-pin.svg"
import baby from "../../assets/icons-svg/baby-pin.svg"
import finance from "../../assets/icons-svg/money-pin.svg"
import sports from "../../assets/icons-svg/baseball-pin.svg"
import space from "../../assets/icons-svg/rocket-pin.svg"
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
                {librarySpecialization === 'general' && <Image src={little}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{
                                                transform: `translate(${-SIZE / 4}px,${-SIZE}px`}} />
                }

                {librarySpecialization === 'public' && <Image src={publicLibrary}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'romance' && <Image src={romance}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'children' && <Image src={children}
                                                 height={SIZE}
                                                 viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'home-improvement' && <Image src={homeImprovement}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'fiction' && <Image src={fiction}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'self-improvement' && <Image src={selfImprovement}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'young-adult' && <Image src={youngAdult}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'fantasy' && <Image src={fantasy}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'textbooks-technical' && <Image src={textTechnical}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'religious' && <Image src={religious}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'history' && <Image src={history}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'art' && <Image src={art}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'cooking' && <Image src={cooking}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'satire' && <Image src={satire}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'pets-animals' && <Image src={pets}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'automotive' && <Image src={auto}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'horror' && <Image src={horror}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'nature' && <Image src={nature}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'fitness' && <Image src={fitness}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'baby' && <Image src={baby}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'sports' && <Image src={sports}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'finance' && <Image src={finance}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'space' && <Image src={space}
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


