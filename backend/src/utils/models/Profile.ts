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

export async function
  selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
    const result = <Profile[]>await sql `SELECT profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function updateProfile (profile: Profile): Promise<string> {
    const {profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName} = profile
    await sql `UPDATE profile SET profile_activation_token = ${profileActivationToken}, profile_avatar_url = ${profileAvatarUrl}, profile_email = ${profileEmail}, profile_first_name = ${profileFirstName}, profile_hash = ${profileHash}, profile_last_name = ${profileLastName}, profile_name = ${profileName} WHERE profile_id =${profileId}`
    return  'Profile successfully updated.'
}