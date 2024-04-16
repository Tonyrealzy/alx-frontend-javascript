export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Not an array');
  }
  return array.every((element) => set.has(element));
}
