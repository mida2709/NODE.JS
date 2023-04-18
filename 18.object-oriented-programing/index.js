import Car from './classes/car.js';

const mobil = new Car();
mobil.brand = 'toyota';
mobil.color = 'Red';
mobil.type = 'Sedan';
mobil.engineVolume = 1000;

const mobil2 = new Car();
mobil2.brand = 'Honda';
mobil2.color = 'Black';
mobil2.type = 'Sedan';
mobil.engineVolume = 1500;

mobil.turnOnEngine();
mobil.turnOffEngine();

const mobil3 = new Car('Daihatsu', 'Blue', 'SUV', 2000)

console.log(mobil, mobil2, mobil3)

mobil.fireHorn();

mobil.setBrand('lexus')
console.log(mobil)
console.log(mobil.getBrand())