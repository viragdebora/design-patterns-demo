import { PaymentContext } from "./payment-context.js";
import { CreditCardPayment, PayPalPayment, RevolutPayment } from "./strategies.js";

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const revolutPayment = new RevolutPayment();

// Creating the context and using the CreditCardPayment strategy
const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.pay(100);

// Switching to PayPal strategy
paymentContext.setStrategy(payPalPayment);
paymentContext.pay(200);

// Switching to Revolut strategy
paymentContext.setStrategy(revolutPayment);
paymentContext.pay(300);
