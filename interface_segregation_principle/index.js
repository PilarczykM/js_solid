class Entity {
    constructor(name) {
        this.name = name
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`)
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} atacked ${targetEntity.name} for ${this.attackDamage}`);
        targetEntity.takeDamage(this.attackDamage)
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.name} has ${this.health} health left`);
    }
}

class Character extends Entity{
    constructor(name, attackDamage, health) {
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth)

class Wall extends Entity {
    constructor(name, health) {
        super(name)
        this.health = health
    }
}

Object.assign(Wall.prototype, hasHealth)



class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Turret.prototype, attacker)


const turret = new Turret('Turrer', 5)
const wall = new Wall('Wall', 200)
const character = new Character('Bob', 3, 2000)

turret.attack(character)
turret.attack(wall)
character.move()