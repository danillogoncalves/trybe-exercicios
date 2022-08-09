import { ILandVehicle } from "./interfaces/interfaces";

export default class LandVehicle implements ILandVehicle {
  drive(): void {console.log('Drive a futuristic car')}
}