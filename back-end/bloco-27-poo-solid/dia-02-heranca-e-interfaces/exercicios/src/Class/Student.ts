import Person from "./Person";

class Student extends Person {
  private _enrollment: string = '';
  private _examGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {return this._enrollment};

  set enrollment(newValue: string) {this._enrollment = newValue};
  
  get examGrades(): number[] {return this._examGrades};

  set examGrades(newValue: number[]) {
    if (newValue.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examGrades = newValue;
  }

  get workGrades(): number[] {return this._workGrades};

  set workGrades(newValue: number[]) {
    if (newValue.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    this._workGrades = newValue;
  }

  generateEnrollment(): string {
    return ('STU' + Date.now() + Math.random().toString().split('.')[1]);
  }

  sumGrades(): number {
    return [...this._examGrades, ...this._workGrades].reduce((sum, grade) => sum = sum + grade, 0);
  }

  sumAverageGrade(): number {
    const divider = this._examGrades.length + this._workGrades.length;
    const sumGrades = this.sumGrades();

    return Math.round(sumGrades/divider);
  }
}

export default Student;