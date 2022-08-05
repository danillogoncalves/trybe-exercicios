export default abstract class Character {
  constructor(protected name: string, protected specialMoveName: string) { }
  abstract talk(): void;
  abstract specialMove(): void;
}