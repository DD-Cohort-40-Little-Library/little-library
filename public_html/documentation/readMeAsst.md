# Data Downloader
    - Get with George on this


####
***Data pulled directly from table input***
(**Activation Code No dashes**)
(**Profile ID**)
(**Library ID**)
(**EVENT DATE**)
(**EVENT ID**)
(**Check IN ID**)
####

## Insomnia
### Ping
147.182.***.**:****/apis/

### INSERT sign up
POST: http://147.182.***.**:****/apis/sign-up/
{"profileEmail" : "jsmith*****@gmail.com",
"profileFirstName" : "Timmy",
"profileLastName" : "Bow",
"profileName" : "Timmy",
"profilePassword" : "N****d",
"profilePasswordConfirm" : "N****d"}
### SELECT Activate
GET: http://147.182.***.**:****/apis/sign-up/activation/(**Activation Code No dashes**)
### INSERT Sign In
POST: http://143.198.***.**:****/apis/sign-in
{"profileEmail" : "JeffHigha@netscape.com",
"profilePassword" : "*****"}
### SELECT Profile By Profile Id
GET: http://147.182.***.**:****/apis/profile/(**Profile ID**)
### UPDATE Attri Data Profile by Profile Id
PUT: http://147.182.***.**:****/apis/profile/profileId/(**Profile ID**)
{"profileId":"fdbffde5-96f2-4912-80b3-10488f052e7b",
"profileAvatarUrl":"http://something.com/whatever.jpg",
"profileEmail":"nyazdavila@gmail.com",
"profileFirstName": "Johnny",
"profileLastName":"Dal-mere",
"profileName":"MyPorkMust-veWentBad"}
### DELETE Entire Profile
DELETE: http://147.182.***.**:****/apis/profile/profileId/(**Profile ID**)
### INSERT Library
POST: http://147.182.***.**:****/apis/library/
{"libraryAddress" : "another street 2",
"libraryDescription" : "not my libre***ary",  
"libraryEventOptIn" : true,
"libraryLat" : 36.1284,
"libraryLng" : -106.9847,
"libraryName": "Library 2",
"librarySpecialization" : "scifi",
"libraryType" : "LL"}
### SELECT All Libraries
GET: http://147.182.***.**:****/apis/library
### SELECT Library By Library Id
GET: http://147.182.***.**:****/apis/library/(**Library ID**)
### SELECT Library By Library Profile Id
GET: http://147.182.***.**:****/apis/library/libraryProfileId/(**Profile ID**)
### SELECT All Libraries by Library Event Opt-In
GET: http://143.198.***.**:****/apis/library/libraryEventOptIn
### UPDATE Attri Data Library
PUT: http://147.182.***.**:****/apis/library/(**Library ID**)
{"libraryAddress":"another street",
"libraryDescription":"not my library still",
"libraryEventOptIn": false,
"libraryLat":35.12345,
"libraryLng":-106.9874,
"libraryName":"who does this belong to?",
"librarySpecialization": "BROmance",
"libraryType":"LL"}
### DELETE Entire Library
DELETE: http://147.182.***.**:****/apis/library/(**Library ID**)
### INSERT Event
POST: http://147.182.***.**:****/apis/event/(**Library ID**)
{"eventDate":"2023-01-25T10:10:10-07:00",
"eventDescription": "Awesome!",
"eventEnd":"2023-01-25T10:10:10-07:00",
"eventStart":"2023-01-25T10:10:10-07:00",
"eventTitle": "Third Event EVER!",
"eventType": "Unknown" }
### SELECT Event By Event Date
GET: http://147.182.***.**:****/apis/event/(**EVENT DATE**)
### SELECT Event By Event Id
GET: http://147.182.***.**:****/apis/event/(**EVENT ID**)
### SELECT Event By Event Library Id
GET: http://147.182.***.**:****/apis/event/eventLibraryId/(**Library ID**)
### SELECT All Event By Event Profile Id
GET: http://147.182.***.**:****/apis/event/eventProfileId/(**Profile ID**)
### UPDATE Attri Data Event by Event Id
PUT: http://147.182.***.**:****/apis/event/(**EVENT ID**)
"eventDate":"2024-01-25T10:10:10-07:00",
"eventDescription": "Awesome!",
"eventEnd":"2027-01-25T10:10:10-07:00",
"eventStart":"2023-01-25T10:10:10-07:00",
"eventTitle": "Third Event EVER!",
"eventType": "Test Put" ,
"eventLibraryId": "06a47398-3000-4fe7-bd21-b25ba16e6319",
"eventProfileId": "a83e45d3-edc6-4b1c-8f34-663ac5aa23c2" }
### DELETE Event by Event Id
DELETE: http://147.182.***.**:****/apis/event/(**EVENT ID**)
### INSERT CheckIn
POST: http://147.182.***.**:****/apis/check-in/
{"checkInComment":"I hate also so buggin BUGGING!",
"checkInDate":"2022-02-25T17:10:10.000Z",
"checkInFollowLibrary":true,
"checkInPhotoName":"Winnerandloser",
"checkInPhotoUrl":"https://getphotos.com",
"checkInReport":false,
"checkInLibraryId": "fa72565e-594f-4efe-8d95-77cef47997dd",
"checkInProfileId": "a83e45d3-edc6-4b1c-8f34-663ac5aa23c2"}
### SELECT Check-In By Library Id
GET: http://147.182.***.**:****/apis/check-in/checkInLibraryId/(**Library ID**)
### SELECT Check-In By Check-In Profile Id
http://147.182.***.**:****/apis/check-in/(**Profile ID**)
### UPDATE Check-In Attri Data by Check In Id
PUT: http://147.182.***.**:****/apis/checkin/checkInId/(**Check IN ID**)
{"checkInComment":"I hate TESTING and DEBUGGING!",
"checkInDate":"2022-02-25T17:10:10.000Z",
"checkInFollowLibrary":true,
"checkInPhotoName":"WinnerWinner",
"checkInPhotoUrl":"https://getphotos.com",
"checkInReport":false}
### DELETE Check-in
DELETE: http://147.182.***.**:****/apis/check-in/(**Check IN ID**)