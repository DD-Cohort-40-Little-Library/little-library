import React, {useState} from "react";
import {Marker, Popup} from "react-map-gl";
import {Col, Image, Row} from "react-bootstrap";
import little from "../../assets/icons-svg/little-library-pin.svg";
import publicLibrary from "../../assets/icons-svg/public-library-pin.svg";
import romance from "../../assets/icons-svg/romance-pin.svg";
import children from "../../assets/icons-svg/teddy-bear-pin.svg";
import homeImprovement from "../../assets/icons-svg/tools-pin.svg";
import fiction from "../../assets/icons-svg/alien-pin.svg";
import selfImprovement from "../../assets/icons-svg/mind-pin.svg";
import youngAdult from "../../assets/icons-svg/vampire-pin.svg";
import fantasy from "../../assets/icons-svg/unicorn-pin.svg";
import textTechnical from "../../assets/icons-svg/tech-pin.svg";
import religious from "../../assets/icons-svg/bible-pin.svg";
import history from "../../assets/icons-svg/knight-pin.svg";
import art from "../../assets/icons-svg/art-pin.svg";
import cooking from "../../assets/icons-svg/pie-pin.svg";
import satire from "../../assets/icons-svg/drama-pin.svg";
import pets from "../../assets/icons-svg/animal-pin.svg";
import auto from "../../assets/icons-svg/jeep-pin.svg";
import horror from "../../assets/icons-svg/ghost-face-pin.svg";
import nature from "../../assets/icons-svg/leaf-pin.svg";
import fitness from "../../assets/icons-svg/fitness-pin.svg";
import baby from "../../assets/icons-svg/baby-pin.svg";
import finance from "../../assets/icons-svg/money-pin.svg";
import sports from "../../assets/icons-svg/baseball-pin.svg";
import space from "../../assets/icons-svg/rocket-pin.svg";
import littleSq from "../../assets/icons-svg/little-library-sq.svg";
import publicLibrarySq from "../../assets/icons-svg/public-library-sq.svg";
import romanceSq from "../../assets/icons-svg/romance-sq.svg";
import childrenSq from "../../assets/icons-svg/teddy-bear-sq.svg";
import homeImprovementSq from "../../assets/icons-svg/tools-sq.svg";
import fictionSq from "../../assets/icons-svg/alien-sq.svg";
import selfImprovementSq from "../../assets/icons-svg/mind-sq.svg";
import youngAdultSq from "../../assets/icons-svg/vampire-sq.svg";
import fantasySq from "../../assets/icons-svg/unicorn-sq.svg";
import textTechnicalSq from "../../assets/icons-svg/tech-sq.svg";
import religiousSq from "../../assets/icons-svg/bible-sq.svg";
import historySq from "../../assets/icons-svg/knight-sq.svg";
import artSq from "../../assets/icons-svg/art-sq.svg";
import cookingSq from "../../assets/icons-svg/pie-sq.svg";
import satireSq from "../../assets/icons-svg/drama-sq.svg";
import petsSq from "../../assets/icons-svg/animal-sq.svg";
import autoSq from "../../assets/icons-svg/jeep-sq.svg";
import horrorSq from "../../assets/icons-svg/ghost-face-sq.svg";
import natureSq from "../../assets/icons-svg/leaf-sq.svg";
import fitnessSq from "../../assets/icons-svg/fitness-sq.svg";
import babySq from "../../assets/icons-svg/baby-sq.svg";
import financeSq from "../../assets/icons-svg/money-sq.svg";
import sportsSq from "../../assets/icons-svg/baseball-sq.svg";
import spaceSq from "../../assets/icons-svg/rocket-sq.svg";
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
            libraryType,
            libraryImageUrl
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
                {librarySpecialization === '' && <Image src={little}
                                                height={SIZE}
                                                viewBox="0 0 24 24"
                                                 style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

                {librarySpecialization === 'Official Community' && <Image src={publicLibrary}
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
                {librarySpecialization === 'Technical or Textbooks' && <Image src={textTechnical}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Religious' && <Image src={religious}
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
                {librarySpecialization === 'Animals or Pets' && <Image src={pets}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Automotive' && <Image src={auto}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Horror' && <Image src={horror}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Nature' && <Image src={nature}
                                                  height={SIZE}
                                                  viewBox="0 0 24 24"
                                                  style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Fitness' && <Image src={fitness}
                                                               height={SIZE}
                                                               viewBox="0 0 24 24"
                                                               style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Baby' && <Image src={baby}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Sports' && <Image src={sports}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Finance' && <Image src={finance}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }
                {librarySpecialization === 'Space' && <Image src={space}
                                                   height={SIZE}
                                                   viewBox="0 0 24 24"
                                                   style={{transform: `translate(${-SIZE / 4}px,${-SIZE}px`}}/>
                }

            </Marker>

            {showPopup && (
                <Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30}
                       className={"libraryPopup"}>
                    <div className={"text-center"} id={"mapPopUp"}>
                        {/*{libraryImageUrl}*/}
                        <Link to={`/library-landing/${libraryId}`}><h3>{libraryName}</h3></Link>
                        <p>{libraryAddress}</p>
                        <p>{libraryType}</p>
                        <p>{librarySpecialization}</p>
                        {librarySpecialization === '' && <Image src={littleSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Official Community' && <Image src={publicLibrarySq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Animals or Pets' && <Image src={petsSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Art' && <Image src={artSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Automotive' && <Image src={autoSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Baby' && <Image src={babySq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Children' && <Image src={childrenSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Cooking' && <Image src={cookingSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Fantasy' && <Image src={fantasySq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Fiction' && <Image src={fictionSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Finance' && <Image src={financeSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Fitness' && <Image src={fitnessSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'History' && <Image src={historySq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Home Improvement' && <Image src={homeImprovementSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Horror' && <Image src={horrorSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Nature' && <Image src={natureSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Religious' && <Image src={religiousSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Romance' && <Image src={romanceSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Satire' && <Image src={satireSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Self Improvement' && <Image src={selfImprovementSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Space' && <Image src={spaceSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Sports' && <Image src={sportsSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Technical or Textbooks' && <Image src={textTechnicalSq} style={{height: "5rem"}}/>}
                        {librarySpecialization === 'Young Adult' && <Image src={youngAdultSq} style={{height: "5rem"}}/>}
                    </div>
                </Popup>
            )}
        </>
    )
}


