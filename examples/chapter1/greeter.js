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
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
var person = new User('le', 'yang');
console.log(greeter(person));
