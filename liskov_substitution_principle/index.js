class FlyingBird {
    fly() {
        console.log('I can fly')
    }
}

class SwimmingBird {
    swim() {
        console.log("I can swim");
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log("I can quack")
    }
}

class Pinquin extends SwimmingBird {
}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingBirdSwim(bird) {
    bird.swim()
}

const duck = new Duck()
const pinquin = new Pinquin()

makeFlyingBirdFly(duck)
makeSwimmingBirdSwim(pinquin)