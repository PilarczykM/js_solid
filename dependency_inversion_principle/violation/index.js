class Store {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100)
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15 * quantity * 100)
    }
}

class Stripe {
    constructor(name) {
        this.name = name
    }

    makePayment(amountInCents) {
        console.log(`${this.name} made payment of ${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(name, amountInCents) {
        console.log(`${name} made payment of ${amountInCents / 100} with Paypal`);
    }
}

const store = new Store('John')
store.purchaseBike(1)
store.purchaseHelmet(2)