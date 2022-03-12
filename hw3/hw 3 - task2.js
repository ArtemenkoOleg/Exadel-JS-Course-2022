let parsedJSON = require('task2-data.json');
let people = parsedJSON;

/* idea: conver array of objects to array of strings, 
so that use Set container to select unique elements 
and then convert it back to JSON
*/

let peopleStringify = people.map(JSON.stringify)
console.log("before length: " + (peopleStringify.length).toString())

let uniquePeople = [...new Set(peopleStringify)];
uniquePeople = uniquePeople.map(JSON.parse)

console.log("after length: " + (uniquePeople.length).toString())