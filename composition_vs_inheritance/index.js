function attacker({ name }) {
    return {
        atack: () => {
            console.log(`${name} atacked`)
        }
    }
}

function wallker({ name }) {
    return {
        walk: () => {
            console.log(`${name} walked`)
        }
    }
}

function swimmer({ name }) {
    return {
        swim: () => {
            console.log(`${name} swam`)
        }
    }
}

function flyer({ name }) {
    return {
        fly: () => {
            console.log(`${name} flew`)
        }
    }
}

function poisioner({ name }) {
    return {
        poision: () => {
            console.log(`${name} poisioned`)
        }
    }
}

function monsterCreator(name) {
    const monster = {name: name}
    return {
        ...monster,
        ...attacker(monster)
    }
}

function swimmingMonsterCreator(name) {
    const monster = {name: name}
    return {
        ...monsterCreator(name),
        ...swimmer(monster)
    }
}

function flyingMonsterCreator(name) {
    const monster = {name: name}
    return {
        ...monsterCreator(name),
        ...flyer(monster)
    }
}

function poisionMonsterCreator(name) {
    const monster = {name: name}
    return {
        ...monsterCreator(name),
        ...poisioner(monster)
    }
}


const bear = monsterCreator('bear')
bear.atack()

const eagle = flyingMonsterCreator('eagle')
eagle.atack()
eagle.fly()

const shark = swimmingMonsterCreator('shark')
shark.atack()
shark.swim()

const snake = poisionMonsterCreator('snake')
snake.atack()
snake.poision()