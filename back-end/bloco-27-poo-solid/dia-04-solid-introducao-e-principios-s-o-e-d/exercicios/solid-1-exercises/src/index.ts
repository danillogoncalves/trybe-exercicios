import Plants from './Plants';

const plants = new Plants();

plants.getPlantsThatNeedsSunWithId('cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770')
  .then((array) => console.log(array));
