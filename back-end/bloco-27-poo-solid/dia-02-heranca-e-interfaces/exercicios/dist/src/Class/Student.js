"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = '';
        this._examGrades = [];
        this._workGrades = [];
        this.enrollment = this.generateEnrollment();
    }
    get enrollment() { return this._enrollment; }
    ;
    set enrollment(newValue) { this._enrollment = newValue; }
    ;
    get examGrades() { return this._examGrades; }
    ;
    set examGrades(newValue) {
        if (newValue.length > 4)
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        this._examGrades = newValue;
    }
    get workGrades() { return this._workGrades; }
    ;
    set workGrades(newValue) {
        if (newValue.length > 2)
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        this._workGrades = newValue;
    }
    generateEnrollment() {
        return ('STU' + Date.now() + Math.random().toString().split('.')[1]);
    }
    sumGrades() {
        return [...this._examGrades, ...this._workGrades].reduce((sum, grade) => sum = sum + grade, 0);
    }
    sumAverageGrade() {
        const divider = this._examGrades.length + this._workGrades.length;
        const sumGrades = this.sumGrades();
        return Math.round(sumGrades / divider);
    }
}
exports.default = Student;
