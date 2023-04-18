export default class vihacle {
    engineStatus;
    engineVolume;
    
    constructor(engineVolume) {
        this.engineStatus = false;
        this.engineVolume = engineVolume;
    }

    turnOnEngine() {
        this.engineStatus = true;
        console.log('Engine is on');
    }

    turnOffEngine() {
        this.engineStatus = false;
        console.log('Engine is off');
    }

    fireHorn() {
        console.log(('Beep beep'))
    }
}