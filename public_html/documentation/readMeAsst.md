# Data Downloader
    - Get with George on this

## Insomnia
### Ping
147.182.***.**:****/apis/

### INSERT sign up
http://147.182.***.**:****/apis/sign-up/
{"profileEmail" : "jsmith*****@gmail.com",
"profileFirstName" : "Timmy",
"profileLastName" : "Bow",
"profileName" : "Timmy",
"profilePassword" : "N****d",
"profilePasswordConfirm" : "N****d"}
### SELECT Activate
http://147.182.***.**:****/apis/sign-up/activation/da1642354d49039af7490db279cec2eb
### INSERT Sign In
{"profileEmail" : "JeffHigha@netscape.com",
"profilePassword" : "*****"}
### SELECT Profile By Profile Id
http://147.182.***.**:****/apis/profile/c690865c-c69a-48e3-a579-e5a916da1545
### UPDATE Field Data Profile
http://147.182.***.**:****/apis/profile/c690865c-c69a-48e3-a579-e5a916da1545
{"profileId":"c69*******1545",
"profileAvatarUrl":"http://something.com/whatever.jpg",
"profileEmail":"Johhny@JimLong.org",
"profileFirstName": "Johnny",
"profileLastName":"Dal-mere",
"profileName":"MyPorkMust-veWentBad"}
### DELETE Entire Profile
http://147.182.***.**:****/apis/profile/c690865c-c69a-48e3-a579-e5a916da1545
### INSERT Library
http://147.182.***.**:****/apis/library/
{"libraryAddress" : "another street 2",
"libraryDescription" : "not my libre***ary",  
"libraryEventOptIn" : true,
"libraryLat" : 36.1284,
"libraryLng" : -106.9847,
"libraryName": "Library 2",
"librarySpecialization" : "scifi",
"libraryType" : "LL"}
### SELECT All Libraries
http://147.182.***.**:****/apis/library
### SELECT Library By Library Id
http://147.182.***.**:****/apis/library/libraryId/80f1dea2-1bc6-4747-aa1d-97e6f0ff93e2
### SELECT Library By Library Profile Id
http://147.182.***.**:****/apis/library/libraryProfileId/c690865c-c69a-48e3-a579-e5a916da1545
### UPDATE Field Data Library
http://147.182.***.**:****/apis/library/80f1dea2-1bc6-4747-aa1d-97e6f0ff93e2
{"libraryAddress":"another street",
"libraryDescription":"not my library still",
"libraryEventOptIn": false,
"libraryLat":35.12345,
"libraryLng":-106.9874,
"libraryName":"who does this belong to?",
"librarySpecialization": "BROmance",
"libraryType":"LL"}
### DELETE Entire Library
http://147.182.***.**:****/apis/library/80f1dea2-1bc6-4747-aa1d-97e6f0ff93e2
### INSERT Event
http://147.182.***.**:****/apis/event/80f1dea2-1bc6-4747-aa1d-97e6f0ff93e2
{"eventDate":"2023-01-25T10:10:10-07:00",
"eventDescription": "Awesome!",
"eventEnd":"2023-01-25T10:10:10-07:00",
"eventStart":"2023-01-25T10:10:10-07:00",
"eventTitle": "Third Event EVER!",
"eventType": "Unknown" }
### SELECT Event By Event Date
http://147.182.***.**:****/apis/event/2024-01-25T17:10:10.000Z
### SELECT Event By Event Id
http://147.182.***.**:****/apis/event/eventId/145087ed-0bfd-457a-83af-e676ed66ebae
### SELECT Event By Event Library Id
http://147.182.***.**:****/apis/event/eventLibraryId/80f1dea2-1bc6-4747-aa1d-97e6f0ff93e2
### UPDATE Field Data Event
http://147.182.***.**:****/apis/event/eventId/145087ed-0bfd-457a-83af-e676ed66ebae
{"eventDate":"2024-01-25T10:10:10-07:00",
"eventDescription": "Awesome!",
"eventEnd":"2027-01-25T10:10:10-07:00",
"eventStart":"2023-01-25T10:10:10-07:00",
"eventTitle": "Third Event EVER!",
"eventType": "Test Put" }
### DELETE Event
http://147.182.***.**:****/apis/event/145087ed-0bfd-457a-83af-e676ed66ebae
### 
### 
### 
### 
### 