const person = {
  name: 'Max',               // this key value pair is also called 'property' or a 'field' of the object      
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};
const copiedPerson = {...person};
console.log(copiedPerson);

// person.greet();

const printName = ({ name }) => {
  console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);
