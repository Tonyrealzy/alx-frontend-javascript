export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let value of array) {
    newValue = appendString + value;
    newArray.push(newValue);
  }

  return newArray;
}
