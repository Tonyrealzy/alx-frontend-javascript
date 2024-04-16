export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint object');
  }

  let callCount = 0;

  if (callCount === 0) {
    weakMap.get(endpoint) === callCount;
  }
  
  let count = weakMap.get(endpoint);

  if (!count || count === undefined) {
    count = 0;
  }
  count += 1;
  
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  
  weakMap.set(endpoint, count);

  return count;
}
