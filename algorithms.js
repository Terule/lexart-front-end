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