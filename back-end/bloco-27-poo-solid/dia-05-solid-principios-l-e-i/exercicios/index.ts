import AirVehicle from './AirVehicle';
import CepService from './CepService';
import FuturistcCar from './FuturisticCar';
import LandVehicle from './LandVehicle';
import MockCepApi from './tests/mocks/MockCepApi';
// import FooCepAPI from './FooCepAPI';

async function main() {
  const cepApi = new MockCepApi()
  const cepSvc = new CepService(cepApi);
  const landVehicle = new LandVehicle();
  const airVehicle = new AirVehicle();
  const futuristicVehicle = new FuturistcCar();

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
  landVehicle.drive();
  airVehicle.fly();
  futuristicVehicle.drive();
  futuristicVehicle.fly();
}

main();