import { Company, Team, Employee } from "./parties.js"
import { CompanyIterator } from "./company-iterator.js";

const companyA = new Company('Company A');

const teamA = new Team('Team A');
teamA.addEmployee(new Employee('Emp1'));
teamA.addEmployee(new Employee('Emp2'));

const teamB = new Team('Team B');
teamB.addEmployee(new Employee('Emp3'));
teamB.addEmployee(new Employee('Emp4'));

const teamC = new Team('Team C');
teamC.addEmployee(new Employee('Emp5'));
teamC.addEmployee(new Employee('Emp6'));

// Adding teams to companyA
companyA.addTeam(teamA);
companyA.addTeam(teamB);
companyA.addTeam(teamC);

const iterator = new CompanyIterator(companyA);

// Iterating over all companies
console.log('Iterating forward over all companies:');
iterator.iterateForward();

// Iterating backward over all companies
console.log('\nIterating backward over all companies:');
iterator.iterateBackward();