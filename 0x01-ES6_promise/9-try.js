export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const response = mathFunction();
    queue.push(response);
  } catch (error) {
    queue.push(error.message || 'An error occurred while processing the request.');
  }
  queue.push('Guardrail was processed');
  return queue;
}
