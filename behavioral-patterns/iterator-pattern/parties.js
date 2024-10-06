export class Employee {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

export class Team {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getEmployees() {
        return this.employees;
    }

    getName() {
        return this.name;
    }
}

export class Company {
    constructor(name) {
        this.name = name;
        this.teams = [];
    }

    addTeam(team) {
        this.teams.push(team);
    }

    getName() {
        return this.name;
    }
}