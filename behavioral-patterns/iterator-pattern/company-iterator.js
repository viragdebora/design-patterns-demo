import { Company, Employee, Team } from "./parties.js";

export class CompanyIterator {
    /**
     * 
     * @param {Company} company 
     */
    constructor(company) {
        this.company = company;
        this.activeTeamIndex = -1;
        this.activeEmployeeIndex = -1;
    }

    hasNext() {
        if (this.activeTeamIndex === -1) {
            return true;
        }

        const team = this.company.teams[this.activeTeamIndex];
        if (!team) {
            return false;
        }

        return true;
    }

    next() {
        if (this.activeTeamIndex === -1) {
            this.activeTeamIndex = 0;
            return this.company;
        }

        const team = this.company.teams[this.activeTeamIndex];

        if (this.activeEmployeeIndex === -1) {
            this.activeEmployeeIndex++;
            return team;
        }

        const employees = team.getEmployees();
        const nextEmployee = employees[this.activeEmployeeIndex];
        this.activeEmployeeIndex++;

        if (this.activeEmployeeIndex === employees.length) {
            this.activeTeamIndex++;
            this.activeEmployeeIndex = -1;
        }

        return nextEmployee;
    }

    hasPrev() {
        if (this.activeTeamIndex === -1) {
            return true;
        }

        const team = this.company.teams[this.activeTeamIndex];
        if (!team) {
            return false;
        }

        return true;
    }

    prev() {
        if (this.activeTeamIndex === -1) {
            this.activeTeamIndex--;
            return this.company;
        }

        const team = this.company.teams[this.activeTeamIndex];
        if (this.activeEmployeeIndex === -1) {
            this.activeTeamIndex--;
            this.activeEmployeeIndex = this.company.teams[this.activeTeamIndex]?.getEmployees().length - 1;

            return team;
        }

        const employees = team.getEmployees();
        const employee = employees[this.activeEmployeeIndex];
        this.activeEmployeeIndex--;

        return employee;
    }

    iterateForward() {
        while (this.hasNext()) {
            const item = this.next();
            if (item instanceof Company) {
                console.log('Company:', item.getName());
            } else if (item instanceof Team) {
                console.log('Team:', item.getName());
            } else if (item instanceof Employee) {
                console.log('Employee:', item.getName());
            }
        }
    }

    iterateBackward() {
        this.activeTeamIndex = this.company.teams.length - 1;
        this.activeEmployeeIndex = this.company.teams[this.activeTeamIndex].getEmployees().length - 1;
        while (this.hasPrev()) {
            const item = this.prev();
            if (item instanceof Company) {
                console.log('Company:', item.getName());
            } else if (item instanceof Team) {
                console.log('Team:', item.getName());
            } else if (item instanceof Employee) {
                console.log('Employee:', item.getName());
            }
        }
    }
}