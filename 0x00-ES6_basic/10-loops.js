export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}

//   for (const value of array) {
//     const modifiedValue = appendString + value;
//     array.push(modifiedValue); // Don't modify original array elements
//   }
