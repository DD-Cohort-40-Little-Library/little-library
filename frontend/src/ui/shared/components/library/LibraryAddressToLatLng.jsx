import React from "react";


const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('YOUR_API_KEY');


export function LibraryAddressToLatLng(){
    async function main() {
        try {
            await addressToLatLng()
        } catch (error) {
            console.error(error)
        }
    }

    return main()

async function addressToLatLng() {
        try {
            geocoder
                .geocode('1109 N Highland St, Arlington, VA')
                //format is Street# Direction Street, City, StateAbbrev
                .then(response => {
                    console.log(response);
                    return response
                })
                .catch(error => {
                    console.error(error);
                });
        }
        catch (error) {
            throw error
        }
}
}

