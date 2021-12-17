var name = 'hit'
const  age = 20;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user hobbies: ' +
    userHasHobby
  )
}

console.log(summarizeUser(name, age, hasHobbies));

// console.log(name);
