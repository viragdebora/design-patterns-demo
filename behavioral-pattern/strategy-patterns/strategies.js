class PaymentStrategy {
    pay(amount) {
        throw new Error("This method should be overridden!");
    }
}

export class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} with Credit Card.`);
    }
}

export class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} with PayPal.`);
    }
}

export class RevolutPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} with Revolut.`);
    }
}
