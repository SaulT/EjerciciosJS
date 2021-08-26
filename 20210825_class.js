/*
Classes were added in last version of JavaScript (called ECMAScript 6 or just ES6). It's something similar to how classes work in other languages (Java, Ruby, etc). This is a very important concept in programming, so sooner or later you'll want to learn about it. (And I highly recommend you to do it before the Java modules).


Create a  Car class:

1) Add properties like model, so you can create a "Ford" with model "Mondeo". Add the properties you like in the constructor method.
2) Add a method to accelerate
3) Add a method to stop
4) Add a method turn directions
5) Add a method call status to display the information of the car (properties, methods, etc)

Instance at least 2.
*/

class car {
    constructor(mark, model){
        this.mark = mark,
        this.model = model,
        this.speed = 0
    }

    accelerate() {
        this.speed += 10
    }
    stop() {
        this.speed = 0
    }
    turnDirections(izq, der) {
        this.izq = izq
        this.der = der
    }
    status() {
        return this
    }
}
const car1 = new car('Ford', 'Mondeo')
car1.accelerate()
car1.stop()
car1.accelerate()
car1.accelerate()
car1.accelerate()
car1.turnDirections(1, 0)
console.log('CAR1 : ', car1.status())



const car2 = new car('Kia', 'Rio')
car2.accelerate()
car2.accelerate()
car2.accelerate()
car2.accelerate()
car2.turnDirections(0, 1)
console.log('CAR2 : ', car2.status())


