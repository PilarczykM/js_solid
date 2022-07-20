class Entity {
    constructor(name, attackDamage, health) {
        this.name = name
        this.attackDamage = attackDamage
        this.health = health
    }

    move() {
        console.log(`${this.name} moved`)
    }

    attack(targetEntity) {
        console.log(`${this.name} atacked ${targetEntity.name} for ${this.attackDamage}`);
        targetEntity.takeDamage(this.attackDamage)
    }

    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.name} has ${this.health} health left`);
    }
}

class Character extends Entity{

}

class Wall extends Entity {
    constructor(name, health) {
        super(name, 0, health)
    }

    move() {
        return null
    }

    attack() {
        return null
    }
}

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1)
    }

    move() {
        return null
    }

    takeDamage() {
        return null
    }
}

const turret = new Turret('Turrer', 5)
const wall = new Wall('Wall', 200)
const character = new Character('Bob', 3, 2000)

turret.attack(character)
wall.move()
character.move()