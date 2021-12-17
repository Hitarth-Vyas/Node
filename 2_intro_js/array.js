const hobbies = ['hit', 'it'];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');      // here we are able to push this object even hobbies is const becase we are simply adding this in array without changing the base address
// console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3));

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);