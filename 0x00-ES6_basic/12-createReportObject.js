export default function createReportObject(employeesList) {
  const allEmployees = employeesList.reduce((acc, item) => {
    const departmentName = Object.keys(item)[0];
    const employees = item[departmentName];

    acc[departmentName] = employees;
    return acc;
  }, {});

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
