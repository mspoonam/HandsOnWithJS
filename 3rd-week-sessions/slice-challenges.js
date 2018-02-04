/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./data/profileData");
const a = profiles.length



/*
  Challenge 1.1 - Only extract the first 5 profiles out of the 20
  Expected const firstFiveProfiles = [{}, {}, {}, {}, {}] <-- first five profile objects
*/
const firstFiveProfiles = profiles.slice(0,5)
// const firstProfile = firstFiveProfiles[0]
// console.log(firstProfile.name);
// const lastProfile = firstFiveProfiles[4]
// console.log(lastProfile.name);
console.log(firstFiveProfiles);

/*
  Challenge 1.2 - Only extract the last 5 profiles out of the 20
  Expected const  = [{}, {}, {}, {}, {}] <-- last five profile objects
*/
const profilesTotal = profiles.length
const lastFiveProfiles = profiles.slice(profilesTotal - 5, profilesTotal)
// console.log(lastFiveProfiles.length);
// const firstProfile_lastFiveProfiles = lastFiveProfiles[0]
// console.log(firstProfile_lastFiveProfiles);
// const lastProfile_lastFiveProfiles = lastFiveProfiles[4]
// console.log(lastProfile_lastFiveProfiles);
console.log(lastFiveProfiles);


/*
  Challenge 1.3 - Only extract the 5 profiles from the sixth object in the array to the tenth
  Expected const nextFiveProfiles = [{}, {}, {}, {}, {}] <-- index 6 to index 10
*/
const nextFiveProfiles = profiles.slice(6, 11)
// console.log(nextFiveProfiles.length);
// const nextFiveProfiles_firstFiveProfiles = nextFiveProfiles[0]
// console.log(nextFiveProfiles_firstFiveProfiles.name.first);
// const lastFiveProfiles_firstFiveProfiles = nextFiveProfiles[nextFiveProfiles.length-1]
// console.log(lastFiveProfiles_firstFiveProfiles.name.first);
console.log(nextFiveProfiles);