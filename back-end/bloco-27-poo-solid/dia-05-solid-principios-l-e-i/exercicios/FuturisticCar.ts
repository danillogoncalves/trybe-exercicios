import { IAirPlane, ILandVehicle } from "./interfaces/interfaces"

export default class FuturistcCar implements ILandVehicle, IAirPlane {
  drive(): void {console.log('Drive a futuristic car')}

  fly(): void {console.log('Flying a futuristic car')}
}
