/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./data/shaadiData.json");

/*
  Challenge 1.1 - write a function that gets only the 
  user profiles who have never been married

  Expected const brazilUserProfiles = []
*/
const brazilUserProfiles = profiles.data.filter( function(profile) {
    return profile.mini_profile.marital_status==="Never Married"
});

 /*
 @Poonam => Solving the above using closures
 */
const brazilUserProfilesClosure = profiles.data.filter(profile=>profile.mini_profile.marital_status==="Never Married")

brazilUserProfilesClosure.forEach(profile => {
  console.log(profile.mini_profile.display_name);
}); 
    


/*
  Challenge 1.2 - write a function that gets only the 
  user profiles with college education

  Parse this piece of education data from the loaded json to return an array 

  "education": {
  "education": "High school - Arts",
  "education_stream": "Arts",
  "college_university": "",
  "college_1": "",
  "valid_college_1": "No",
  "college_2": "",
  "valid_college_2": "No"
}

  Expected const collegeUserProfiles = []
*/

const collegeUserProfiles  = profiles.data.map(profile=>profile.education)

console.log(collegeUserProfiles);

/*
  Challenge 1.3 - write a function that gets only the 
  user profiles with more than one photo

  Expected const profilesWithMultiplePhotos = [] <-- nat field equals BR
  

*/
const profilesWithMultiplePhotos = profiles.data.filter(profile=>profile.photo_details.photos.length>1)
console.log(profilesWithMultiplePhotos.length);
console.log(profilesWithMultiplePhotos);

/**
 * Lets print name of those profiles With Multiple Photos
 */
profilesWithMultiplePhotos.forEach(person=>console.log(person.mini_profile.display_name))