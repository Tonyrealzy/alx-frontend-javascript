export default function divideFunction(numerator, denominator) {
    const result = numerator / denominator;
    if (denominator !== 0) {
      return result;
    } 
    else {
      throw new Error('cannot divide by 0');
    }
}
