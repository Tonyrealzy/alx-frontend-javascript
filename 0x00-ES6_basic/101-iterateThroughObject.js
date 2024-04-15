export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  let currentEmployee = reportWithIterator.next();
  while (!currentEmployee.done) {
    employeeNames += `${currentEmployee.value} | `; // Add name and separator
    currentEmployee = reportWithIterator.next();
  }
  return employeeNames.slice(0, -2);
}
