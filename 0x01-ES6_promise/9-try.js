export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const response = mathFunction();
    queue.push(response, 'Guardrail was processed');
  } catch (error) {
    queue.push('Error: ' + error, 'Guardrail was processed');
  }

  return queue;
}
