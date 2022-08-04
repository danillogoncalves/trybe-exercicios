"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    registration: 'FNC16595748999805810031322702027',
    salary: 4500.00,
    admissionDate: new Date(),
    generateRegistration() {
        return ('FNC' + Date.now() + Math.random().toString().split('.')[1]);
    },
};
console.log(employee);
