// json best practices
// a. use camelCase for property names : "firstName": "John
// b. use double quotes for string & number values : "rollNo": "1"
// c. use double quotes for key and value <both></both>
// d. use special characters to replace different spaces like,
//   - underscore for space, \b for backspace, \t for tab, \n for new line, \f for form feed, \r for carriage return, \v for vertical tab
// e. use root level array for multiple objects

const e = require("express");

// example: //ref: here menu and subMenu are root level arrays
// {
//   "menu": [
//     {
//       "id": "1",
//       "name": "File",
//       "value": "F"
//     },
//     {
//       "id": "2",
//       "name": "Edit",
//       "value": "E"
//     }

//   ],
//   "subMenu": [
//     {
//       "id": "3",
//       "name": "Open",
//       "value": "O"
//     },
//     {
//       "id": "4",
//       "name": "Close",
//       "value": "C"
//     }
//   ]
// }

// JSON best practices ends

//imp:
//  http throttle
// throttle is a function that limits the number of times a function can be called over time
// throttle is used to limit the number of times a function can be called over time

// response status that have to manage
// 1. 200 - OK
// 2. 201 - Created
// 3. 204 - No Content -the request has been successfully processed, but is not returning any content
// 4. 400 - Bad Request - the request could not be understood by the server due to malformed syntax
// 5. 401 - Unauthorized
// 6. 403 - Forbidden- the request was a valid request, but the server is refusing to respond to it
// 7. 404 - Not Found

// docs: 
// a.
// api end naming best practice
// URIs resources should be nouns, not verbs
// examples: /users/{id} instead of /getUsers/{id}

// b.
// forward slash (/) should be used to separate resources and sub-resources
// example: /users/{id}/orders clearly falls under the /users/{id} resource which falls under the /users resource

// c. 
// punctuation for lists:
// example: /users/{id1}, {id2} to access multiple users

// d.
// query parameters where necessary:
// example: /users?name=sohan&age=27
// here age is received as string
// so before using it must convert it into number

// e.
// lowercase letters and dashes

// example:
// users/{id}/Pending-Orders is wrong
// users/{id}/pending-orders is correct

// f.
// do not use file extensions
// difine it in file type in code

// example:
// users/{id}.json is wrong
// users/{id} is correct

// g.no trailing slashes
// example:
// users/{id}/ is wrong
// users/{id} is correct



// API Response Best Practices
// - Use HTTP status codes to indicate API status and errors
// - proper content type defined in the response header
//- cache status should be provided
// -authentication and authorization should be provided in the response header in string format

