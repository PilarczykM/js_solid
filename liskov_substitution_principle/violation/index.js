class Bird {
    fly() {
        console.log('I can fly')
    }
}

class Duck extends Bird {
    quack() {
        console.log("I can quack")
    }
}

class Pinquin extends Bird {
    fly() {
        throw new Error("Cannot fly")
    }

    sqwin() {
        console.log("I can swim");
    }
}

function makeBirdFly(bird) {
    bird.fly()
}

const duck = new Duck()
const pinquin = new Pinquin()

makeBirdFly(duck)
makeBirdFly(pinquin)