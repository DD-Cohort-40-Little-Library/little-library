import {sql} from "../database.utils";


export interface Profile {
    profileId: string | null,
    profileActivationToken: string | null,
    profileAvatarUrl: string | null,
    profileEmail: string,
    profileFirstName: string,
    profileHash: string,
    profileLastName: string,
    profileName: string,
}

export async function insertProfile(profile:Profile){
    const {profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName} = profile
    await sql`INSERT INTO profile(profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name) VALUES (gen_random_uuid(), ${profileActivationToken}, ${profileAvatarUrl}, ${profileEmail}, ${profileFirstName}, ${profileHash}, ${profileLastName}, ${profileName})`
    return 'Profile successfully created.'
}