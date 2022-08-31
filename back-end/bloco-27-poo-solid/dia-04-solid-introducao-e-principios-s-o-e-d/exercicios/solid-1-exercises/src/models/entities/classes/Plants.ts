import { IPlants } from '../interfaces/IPlants';

export default class Plants implements IPlants {
  public readonly id: string;
  public breed: string;
  public needsSun: boolean;
  public origin: string;
  public size: number;
  public specialCare?: { waterFrequency: number; } | undefined;

  constructor() {
    this.id = '';
    this.breed = '';
    this.needsSun = false;
    this.origin = '';
    this.size = 0;
  }
}