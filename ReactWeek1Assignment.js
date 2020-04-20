class student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class bootcamp {
    constructor(name, level, students=[]) {
        this.name = name
        this.level = level;
        this.students = students;
    }
    registerStudent(student) { 
        if (this.students.filter(registerEmail => registerEmail.filter).length) {
                    
                    console.log(`${this.student} is registered.`);
        } else {
            this.students.push(student) 
            console.log(`Registering ${student.email} to the bootcamp Web Dev Foundamentals.`);
            console.log(`Number of ${this.students.length}`)
            return this.students;   
        }
    }
}

