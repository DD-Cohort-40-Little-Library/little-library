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
            const results : any = []
            fs.createReadStream('./library-abq-all.csv')
                .pipe(csv())
                .on('data', (data: any) => results.push(data))
                .on('end',  async () => {
                    try {
                        //A fake profile must be created to own the libraries being imported for the data downloader
                        const profileHash1 = await setHash("ILikeFakePasswordsWithNoSpaces");
                        const profile1: Profile = {
                            profileId: null,
                            profileActivationToken: null,
                            profileAvatarUrl: "https://dangerousminds.net/content/uploads/images/throwpillow,36x36,750x1000-bg,f8f8f8.jpg",
                            profileEmail: "mxFakeAccount+1@fake-acounts.rus",
                            profileFirstName: "Private",
                            profileHash: profileHash1,
                            profileLastName: "Libraries",
                            profileName: "MurrayTheFirst"
                        }
                        const profileHash2 = await setHash("SecondILikeFakePasswordsWithNoSpaces");
                        const profile2: Profile = {
                            profileId: null,
                            profileActivationToken: null,
                            profileAvatarUrl: "https://dangerousminds.net/content/uploads/images/61ubRnaBlwL._SL1000_.jpg",
                            profileEmail: "SecondMxFakeAccount+1@fake-acounts.rus",
                            profileFirstName: "Public",
                            profileHash: profileHash2,
                            profileLastName: "Libraries",
                            profileName: "MurrayTheSecond"
                        }
                        const profileId1 = await insertProfile(profile1)
                        const profileId2 = await insertProfile(profile2)

                        for (let result of results) {
                                if (result.libraryType === 'Little Library') {
                                    const littleLibrary: Library = {
                                        libraryId: null,
                                        libraryProfileId: profileId1,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    }
                                    console.log(await insertLibrary(littleLibrary))
                                }
                                else {
                                    const publicLibrary: Library = {
                                        libraryId: null,
                                        libraryProfileId: profileId2,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    }
                                    console.log(await insertLibrary(publicLibrary))
                                }
                        }
                    } catch (error) {
                        throw error
                    }
                })
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
