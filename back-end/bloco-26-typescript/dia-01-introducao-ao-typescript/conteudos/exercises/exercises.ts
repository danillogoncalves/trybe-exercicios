export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(majorDiagonal: number, minorDiagonal: number): number {
  return (majorDiagonal * minorDiagonal) / 2;
}

export function trapeze(majorBase: number, minorBase: number, height: number): number {
  return ((majorBase + minorBase) * height) / 2;
}

export function circle(radius: number): number {
  return (3.14159 * (radius ** 2));
}
