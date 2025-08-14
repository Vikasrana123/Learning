/** Creational Design Pattern

 * The Factory Pattern is a creational design pattern that abstracts the process of object creation.It allows you to create objects 
   without specifying their exact types, delegating the responsibility to subclasses or specialized factory classes. 
   This abstraction promotes flexibility and code maintainability.

 * Factory pattern removes the instantiation of actual implementation classes from client code. Factory pattern makes our code more 
   robust, less coupled and easy to extend. 

   You create a separate class—a “factory”—whose only job is to centralize and encapsulate object creation.
 */

interface HairLoss {
    applyMinoxidil(): string
}
// Concrete class
/**
 * Class representing the Man Matters brand for hair loss treatment.
 * Implements the HairLoss interface.
 */
class ManMatters implements HairLoss {
    applyMinoxidil(): string {
        return `I'm applying Man Matters Minoxidil`
    }
}

class Traya implements HairLoss {
    applyMinoxidil(): string {
        return `I'm applying Traya Minoxidil`
    }
}
//Factory Class 
class HairLossFactory {
    getMinoxidil(age: number): HairLoss {
        if (age >= 18) {
            return new ManMatters()
        } else {
            return new Traya()
        }
    }
}
// Client Class
/**
 * The ClientNew class demonstrates the usage of the HairLossFactory to obtain and apply Minoxidil treatments.
 * 
 * @remarks
 * This class is designed to showcase the factory design pattern by creating instances of Minoxidil treatments
 * with different concentrations and applying them.
 * 
 * @example
 * ```typescript
 * const client = new ClientNew();
 * // Outputs the application of Minoxidil with 5% and 25% concentrations.
 * ```
 */
class ClientNew {
    constructor() {
        const getHairTreatment = new HairLossFactory();
        console.log(getHairTreatment.getMinoxidil(5).applyMinoxidil());
        console.log(getHairTreatment.getMinoxidil(25).applyMinoxidil());
    }
}
console.log(new ClientNew())