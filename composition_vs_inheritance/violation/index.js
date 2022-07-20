class Monster {
    constructor(name) {
        this.name = name
    }

    atack() {
        console.log(`${this.name} atacked`)
    }

    walk() {
        console.log(`${this.name} walked`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam`)
    }
}

const bear = new Monster('bear')
bear.atack()
bear.walk()

const eagle = new FlyingMonster('eagle')
eagle.atack()
eagle.walk()
eagle.fly()

const shark = new SwimmingMonster('shark')
shark.atack()
shark.walk()
shark.swim()