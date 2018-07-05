// [1, 2, 5, 9, 10]



// var array = [10, 2, 5, 1, 9];



// array.sort(function(a,b){
//   return a - b
// });

// console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(students);
students.sort(function(a , b) {

if(a.name < b.name){ //a is lower than b so DO NOTHING
  return -1 //do nothing
}
if(a.name == b.name){ //a = B so DO NOTHING
  return b.age - a.age;
}
if(a.name > b.name){ //A > B so swap
  return 1//pushed B to the left of a
}
});

console.log(students);