class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity)
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.user = user
        this.stripe = new Stripe(user)
    }

    pay(ammountInDollars) {
        this.stripe.makePayment(ammountInDollars * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user
        this.paypal = new Paypal()
    }

    pay(ammountInDollars) {
        this.paypal.makePayment(this.user, ammountInDollars)
    }
}

class Stripe {
    constructor(name) {
        this.name = name
    }

    makePayment(amountInCents) {
        console.log(`${this.name} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(name, amountInDolars) {
        console.log(`${name} made payment of $${amountInDolars} with Paypal`);
    }
}


const stripePaymentProcessor = new StripePaymentProcessor("John")
const paypalPaymentProcessor = new PaypalPaymentProcessor("John")
const store = new Store(stripePaymentProcessor)
store.purchaseBike(1)
store.purchaseHelmet(2)