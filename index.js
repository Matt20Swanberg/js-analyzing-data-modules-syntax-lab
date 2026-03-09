// Imports the DateJS library to enable custom date parsing and formatting
require('datejs')

function combineUsers(...args) {
  // Create an object that will store the final merged users and merge date
  // This object only contains an empty array
  let combinedObject = {
    users: []
  }

  // Loop through each array passed in and add to the combinedObject
  for (let arr of args) {
    // Use the spread operator to expand the current array
    // and push each user individually into combinedObject.users
    combinedObject.users.push(...arr);
  }

  // Add a new property to  combinedObject called "merge_date"
  // DateJS allows us to format today's date as M/D/YYYY
  combinedObject.merge_date = Date.parse(new Date()).toString("M/d/yyyy")

  // Return the object with merged users and the merge date
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};