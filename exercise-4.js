const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// for (let item of Object.entries(person)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

let {id, firstName, lastName, age} = person;


console.log(id)
console.log(firstName)
console.log(lastName)
console.log(age)