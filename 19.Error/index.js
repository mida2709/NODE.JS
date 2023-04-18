// Reference Error
//a
const a = {
    b: 1
}

// mendefinisikan error yang kita buat sendiri
class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
    }
}

//TypeError
if(a.b.c === undefined) {
    throw new CustomError ('a.b.c undefined')
}