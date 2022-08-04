"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    // private _name: string = '';
    // private _birthDate: Date;
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    get name() { return this._name; }
    ;
    set name(newValue) {
        this.validateName(newValue);
        this._name = newValue;
    }
    get birthDate() { return this._birthDate; }
    ;
    set birthDate(newValue) {
        this.validateBirthDate(newValue);
        this._birthDate = newValue;
    }
    static getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const YEAR_MS = 31536000000;
        return Math.floor(diff / YEAR_MS);
    }
    validateName(value) {
        if (value.length < 3)
            throw Error('O nome deve ter no mínimo três caracteres');
    }
    ;
    validateBirthDate(value) {
        if (Person.getAge(value) > 120)
            throw Error('A pessoa deve ter no máximo 120 anos.');
        if (value.getTime() > new Date().getTime())
            throw Error('A pessoa deve ter no máximo 120 anos.');
    }
}
exports.default = Person;
