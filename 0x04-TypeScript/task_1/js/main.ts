interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string] : any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `{${firstName.charAt(0)}. ${lastName}`;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassMethods {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassMethods {
    constructor(
        private firstName: string, private lastName: string
    ) {}

    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}