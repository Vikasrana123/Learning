/***
 * Strategy Design Pattern
 * 
 * Definition: The Strategy Design Pattern is a behavioral design pattern that lets you define a family of algorithms, 
 * put each one into a separate class, and makes their objects interchangeable — allowing the algorithm to vary independently from the clients that 
 * use it.
 *
 */
// Shipping Strategy Interface
interface ShippingStrategy {
    calculate(weight: number): number;
}

// Concrete Strategies
class FedExStrategy implements ShippingStrategy {
    calculate(weight: number): number {
        return weight * 3.00; // FedEx rate
    }
}

class UPSStrategy implements ShippingStrategy {
    calculate(weight: number): number {
        return weight * 4.00; // UPS rate
    }
}

class USPSStrategy implements ShippingStrategy {
    calculate(weight: number): number {
        return weight * 2.50; // USPS rate
    }
}

// Context class
class ShippingCalculator {
    private strategy: ShippingStrategy;

    constructor(strategy: ShippingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: ShippingStrategy) {
        this.strategy = strategy;
    }

    calculateShipping(weight: number): number {
        return this.strategy.calculate(weight);
    }
}

// Usage Example
const calculator = new ShippingCalculator(new FedExStrategy());
console.log(calculator.calculateShipping(10)); // FedEx cost for 10 pounds

calculator.setStrategy(new UPSStrategy());
console.log(calculator.calculateShipping(10)); // UPS cost for 10 pounds

calculator.setStrategy(new USPSStrategy());
console.log(calculator.calculateShipping(10)); // USPS cost for 10 pounds