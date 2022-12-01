import React from "react";


const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('');


export async function addressToLatLng(libAddress) {
        try {
            geocoder
                .geocode(`${libAddress}`)
                //format is Street# Direction Street, City, StateAbbrev
                let response


                (response => {
                    console.log(response);
                    // let libraryLat = response.results[0].location.lat
                    // let libraryLng = response.results[0].location.lng
                    return {libraryLat, libraryLng}
                })
                .catch(error => {
                    console.error(error);
                });
        }
        catch (error) {
            throw error
        }
}


