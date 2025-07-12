
//==============string convert to json===================================================================

const jsonString = '{ "name": "vishnu", "age": "23" }'

const parsedObj = JSON.parse(jsonString);

console.log(parsedObj)
console.log(parsedObj.name)
console.log(parsedObj.age)

//===============object convert to json=================================

// const objectToJson = {
//     "name": "vishnu",
//     "age": "23"
// }
// const json=JSON.stringify(objectToJson)
// console.log(json)