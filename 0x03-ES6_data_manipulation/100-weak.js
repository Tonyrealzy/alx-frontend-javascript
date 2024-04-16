export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint object');
  }

  let count = weakMap.get(endpoint);

  if (!count) {
    count = 0;
  }
  count++;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
  console.log(`Calling API endpoint: ${endpoint.protocol}: ${endpoint.name}`);
}
