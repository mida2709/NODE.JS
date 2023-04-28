import Car from './classes/car.js'

const carList = [];
const carHonda = new Car('Honda', 'red', 'sedan', 2000);
const carAvanza = new Car('Toyota', 'red', 'MVP', 1500);
const carxenia= new Car('daihatsu', 'red', 'MVP', 1500);

carList.push(carHonda, carAvanza, carxenia);
console.log(carList);

function findTypeCarBrand(brand) {
    try {
        const foundedCar = carlist.find(function(car) {
            return car.brand === brand;
        })
        return foundedCar.type;
    } catch (err) {
        if (err.name === 'TypeError') {
            return 'brand not found';
        }
    }

}

console.log('========find car=======')
console.log(findTypecarByBrand('Honda'))
console.log('harusnya tereksekusi')