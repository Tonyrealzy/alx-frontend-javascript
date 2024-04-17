// import { Subjects } from "./subjects/Cpp";
import { Subjects } from './subjects/Java';


export const cpp: Subjects.Subject = new Subjects.Cpp();
export const java:Subjects.Subject = new Subjects.Java();
export const react: Subjects.Subject = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Alice',
    lastName: 'Herrings',
    experienceTeachingC: 10
};

const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(cTeacher);
console.log('C++');
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

const javaSubject = new Subjects.Java();
javaSubject.setTeacher(cTeacher);
console.log('Java');
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new Subjects.React();
reactSubject.setTeacher(cTeacher);
console.log('React');
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());