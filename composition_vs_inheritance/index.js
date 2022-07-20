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

function atteckerAndWalker({ name }) {
    return {
        atack: () => {
            console.log(`${name} atacked`)
        },
        walk: () => {
            console.log(`${name} walked`)
        }
    }
}

function monsterCreator(name) {
    const monster = {name: name}
    return {
        ...monster,
        ...atteckerAndWalker(monster)
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


const bear = monsterCreator('bear')
bear.atack()
bear.walk()

const eagle = flyingMonsterCreator('eagle')
eagle.atack()
eagle.walk()
eagle.fly()

const shark = swimmingMonsterCreator('shark')
shark.atack()
shark.walk()
shark.swim()