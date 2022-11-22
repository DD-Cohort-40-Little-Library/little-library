import axios from 'axios';
import { v1 as uuid } from 'uuid';
import {Library, insertLibrary} from '../models/Library';
import {setHash} from '../auth.utils';
import {Profile, insertProfile, } from '../models/Profile';
import {finished} from 'stream';
const fs = require('fs')
const csv = require('csv-parser')

function LLibraryDataDownloader() : Promise<any> {
    async function main() {
        try{
            await downloadLibraries()

        } catch (error) {
            console.error(error)
        }

    }

    return main()

    async function downloadLibraries() {
        try {
            const results : any = [];

            fs.createReadStream('./library-abq-all.csv')
                .pipe(csv())
                .on('data', (data: any) => results.push(data))
                .on('end',  async () => {
                    try {
                        //A fake profile must be created to own the libraries being imported for the data downloader
                        const profileHash1 = await setHash("ILikeFakePasswordsWithNoSpaces");
                        const profile1: Profile = {
                            profileId: uuid(),
                            profileActivationToken: null,
                            profileAvatarUrl: "http://www.fillmurray.com/150/150",
                            profileEmail: "mxFakeAccount+1@fake-acounts.rus",
                            profileFirstName: "Private",
                            profileHash: profileHash1,
                            profileLastName: "Libraries",
                            profileName: "MurrayTheFirst"
                        }
                        const profileHash2 = await setHash("SecondILikeFakePasswordsWithNoSpaces");
                        const profile2: Profile = {
                            profileId: uuid(),
                            profileActivationToken: null,
                            profileAvatarUrl: "http://www.fillmurray2.com/150/150",
                            profileEmail: "SecondMxFakeAccount+1@fake-acounts.rus",
                            profileFirstName: "Public",
                            profileHash: profileHash2,
                            profileLastName: "Libraries",
                            profileName: "MurrayTheSecond"
                        }
                        console.log(await insertProfile(profile1))
                        console.log(await insertProfile(profile2))

                        for (let result of results) {

                            // ****************** IFIFIFIFIFFIFif
                            const {libraryId, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType} = result
                                if (result.libraryType === 'Little Library') {
                                    const library: Library = {
                                        libraryId: null,
                                        libraryProfileId: result.libraryProfileId,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    }
                                }
                                else {
                                    const library: Library = {
                                        libraryId: null,
                                        libraryProfileId: profile1.profileId,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    }
                                }
                            console.log(library)
                            console.log(await insertLibrary(library))
                        }
                    } catch (error) {
                        throw error
                    }
                });

        } catch (error) {
            throw error
        }
    }
}

LLibraryDataDownloader()
    .then(finished =>{
        console.log("finished")
    }).catch(error => {
    console.error(error)
})