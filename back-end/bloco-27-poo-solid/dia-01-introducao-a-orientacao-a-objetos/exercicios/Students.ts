class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor(enrollment: string, name: string, examGrades?: number[], workGrades?: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examGrades = examGrades || [];
    this.workGrades = workGrades || [];
  }

  get enrollment(): string {return this._enrollment};

  set enrollment(newValue: string) {this._enrollment = newValue};

  get name(): string {return this._name};

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('O campo nome tem que ter mais de três caracteres.');
    }
    this._name = newValue;
  };
  
  get examGrades(): number[] {
    return this._examGrades;
  }

  set examGrades(newValue: number[]) {
    if (newValue.length > 4) throw new Error('Tem que ter no máximo 4 notas nesse campo!');
    this._examGrades = newValue;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set workGrades(newValue: number[]) {
    if (newValue.length > 2) throw new Error('Tem que ter no máximo 2 notas nesse campo!');
    this._workGrades = newValue;
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

const personOne = new Student('202001011', 'Maria da Silva', [25, 20, 23, 23], [45, 45]);

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);

personOne.examGrades = [25, 20, 23, 23];
personOne.workGrades = [45, 45];

console.log(personOne);
console.log(personOne.sumGrades());
console.log(personOne.sumAverageGrade());

export default Student;