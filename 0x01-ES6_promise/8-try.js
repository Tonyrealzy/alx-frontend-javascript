export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    const result = numerator / denominator;
    if (denominator !== 0) {
      resolve('Result is: ', result);
    } else {
      reject(new Error('cannot divide by 0'));
    }
  });
}
