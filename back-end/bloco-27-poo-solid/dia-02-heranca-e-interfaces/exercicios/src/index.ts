import Employee from "./interfaces/Employee";

const employee: Employee = {
  registration: 'FNC16595748999805810031322702027',
  salary: 4500.00,
  admissionDate: new Date(),
  generateRegistration(): string {
    return ('FNC' + Date.now() + Math.random().toString().split('.')[1]);
  },
}

console.log(employee);
