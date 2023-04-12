/*
1.  Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
Get an array containing just the letters
Get an array containing just the numbers
Get the highest number from the array above
*/

const getArrayValues = (array) => {
  const letters = array.filter((item) => typeof item === "string");
  const numbers = array.filter((item) => typeof item === "number");
  const highestNumber = Math.max(...numbers);
  return { letters, numbers, highestNumber };
};

/*
2.  Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
Take into account that the division must not allow 0 dividend
The sum function allows an array as an input parameter and adds all its elements.
The subtraction function allows an array as an input parameter and subtracts all its elements.
Multiplication Function - Ditto
The division function accepts two parameters: a and b.
*/

const sum = (array) => array.reduce((a, b) => a + b)
const subtraction = (array) => array.reduce((a, b) => a - b)
const multiplication = (array) => array.reduce((a, b) => a * b)
const division = (a, b) => {
  if (b === 0) {
    return "The dividend cannot be 0";
  }
  return a / b;
}

const operations = new Map([
  ["sum", sum],
  ["subtraction", subtraction],
  ["multiplication", multiplication],
  ["division", division],
]);

/*
3.  Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric
The default is a string: "XXXX-AAAA-BBBB-CCCC"
The result must be stored in a variable. For example:
$id = generarId()
id is ~ abc1-bb12-234a-bcc2
*/

const randomAlphanumeric = () => Math.random().toString(36).substr(2, 4);

const generateId = () => {
  return `${randomAlphanumeric()}-${randomAlphanumeric()}-${randomAlphanumeric()}-${randomAlphanumeric()}`;
}

const id = generateId();

console.log(id);