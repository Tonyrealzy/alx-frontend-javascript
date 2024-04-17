interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName:'Adaobi', lastName:'Okafor', age:28, location:'Lagos'};
const student2: Student = {firstName: 'Lilian', lastName: 'Esoro', age:25, location: 'Abuja'};

const studentsList: Student[] = [student1, student2];

function createTableRow(student: Student): HTMLTableRowElement {
    const tableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    tableRow.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    tableRow.appendChild(locationCell);

    return tableRow;
}

const tableBody = document.getElementById('student-table-body');

if (tableBody) {
    studentsList.forEach((student) => {
        const tableRow = createTableRow(student);
        tableBody.appendChild(tableRow);
    });
} else {
    console.log('Table body data is not available');
}