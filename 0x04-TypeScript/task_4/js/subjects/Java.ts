export namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingReact?: number;
        experienceTeachingJava?: number;
    }

    export class Subject {
        public teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
    
    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }

    export class React {
        public teacher: Teacher;

        constructor(teacher?: Teacher) {
            this.teacher = teacher;
        };

        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
        
    }

    export class Java {
        public teacher: Teacher;

        constructor(teacher?: Teacher) {
            this.teacher = teacher;
        }
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }

}