// json best practices
// a. use camelCase for property names : "firstName": "John
// b. use double quotes for string & number values : "rollNo": "1"
// c. use double quotes for key and value <both></both>
// d. use special characters to replace different spaces like,
//   - underscore for space, \b for backspace, \t for tab, \n for new line, \f for form feed, \r for carriage return, \v for vertical tab
// e. use root level array for multiple objects

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

