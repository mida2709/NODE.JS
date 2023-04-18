import vihacle from "./vihacle.js";

export default class Car extends vihacle{
    type
    brand
    color

    constructor(brand, color, type, engineVolume) {
        super(engineVolume);
        this.brand = brand;
        this.color = color;
        this.type = type;
    }

    fireHorn() {
        console.log('TON TON');
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getBrand(brand) {
        return this.brand;
    }
    setColor(color) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }
 }

  
