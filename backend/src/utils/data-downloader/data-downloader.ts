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
                        //A fake profile must be created to own the tweets being imported for the data downloader
                        const profileHash = await setHash("ILikeFakePasswordsWithNoSpaces");
                        const profile: Profile = {
                            profileId: uuid(),
                            profileActivationToken: null,
                            profileAvatarUrl: "http://www.fillmurray.com/150/150",
                            profileEmail: "mxFakeAccount@fake-acounts.rus",
                            profileFirstName: "Phil",
                            profileHash,
                            profileLastName: "Murray",
                            profileName: "MurrayTheLegend"
                        }
                        console.log(await insertProfile(profile))
                        for (let result of results) {

                            const {libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType} = result
                            const library: Library = {
                                libraryId: null,
                                libraryProfileId: profile.profileId,
                                libraryAddress,
                                libraryDescription,
                                libraryEventOptIn,
                                libraryLat,
                                libraryLng,
                                libraryName,
                                librarySpecialization,
                                libraryType
                            }
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