export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;
  return {
    next() {
      if (currentEmployeeIndex < allEmployees[departments[currentDeptIndex]]) {
        return {
          value: allEmployees[departments[currentDeptIndex]][currentEmployeeIndex],
          done: false,
        };
      }
      currentEmployeeIndex = 0;
      currentDeptIndex += 1;
      if (currentDeptIndex < departments.length) {
        return {
          value: allEmployees[departments[currentDeptIndex]][currentEmployeeIndex],
          done: false,
        };
      }
      return {
        done: true,
      };
    },
  };
}
