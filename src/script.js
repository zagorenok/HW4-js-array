console.log('#5');
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => console.log("Вы согласились."), 
  () => console.log("Вы отменили выполнение.") 
);

console.log('#6');
const str1 = 'my-short-string';
const arr1 = str1.split('-');
console.log(arr1);


console.log('#7');
const arr2 = ['Java Script', 2015];
const str2 = arr2.join(' ');
console.log(str2);

console.log('#8');
let users = [
  {id: 1, name: 'Vic', age: 21},
  {id: 2, name: 'Petia', age: 30},
  {id: 3, name: 'Jon', age: 5}
];
let userCollection = 
    users.filter(item => item.age < 20 );

console.log(userCollection);

 console.log('#9');
let newUsers = [
  {id: 1, name: "Vic", age: 21},
  {id: 2, name: "Petya", age: 30},
  {id: 3, name: "Jon", age: 5}
];
let names = newUsers.map(item => item.name);
console.log(names); 

console.log('#10');

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
console.log(arr); 

console.log('#11');

function deformation (string, separator) {
  return string.split(separator);
}
console.log(deformation('Hello everybody', ', '));
console.log('#13')

function sumAll(...args) { 
  let sum = 0;
  for (let arg of args) { sum += arg; }
  return sum;
}
console.log( sumAll(4, 6, 10) );
