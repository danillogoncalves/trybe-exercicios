import { IAirPlane } from "./interfaces/interfaces";

export default class AirVehicle implements IAirPlane{
  fly(): void {console.log('Flying a futuristic car')}
}