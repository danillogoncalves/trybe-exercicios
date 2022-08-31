export interface IPlants {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}