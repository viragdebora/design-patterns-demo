export class PaymentContext {
    constructor(strategy) {
        this._strategy = strategy;
    }

    setStrategy(strategy) {
        this._strategy = strategy;
    }

    pay(amount) {
        this._strategy.pay(amount);
    }
}
