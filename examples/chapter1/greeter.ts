// function greeter (person: string) {
//   return `Hello ${person}`
// }
//
// let person = 'le';
//
// console.log(greeter(person));

// ----------------------------------------------------------------

// interface Person {
//   firstName: string;
//   lastName: string;
// }
//
// function greeter (person: Person) {
//   return `Hello ${person.firstName} ${person.lastName}`
// }
//
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
//
// console.log(greeter(person));

// ----------------------------------------------------------------

class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.fullName = firstName + ' ' + lastName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

let person = new User('le', 'yang')

console.log(greeter(person));
