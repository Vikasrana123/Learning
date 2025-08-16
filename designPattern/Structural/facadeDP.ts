/***
 * Facade Design Pattern
 * Definition: The Facade Design Pattern is a structural design pattern that provides a simplified interface to a complex subsystem.
 * 
 * It’s particularly useful in situations where:
 * 
 * You want to provide a simple interface to a complex system.
 * You want to decouple a client from the implementation details of a subsystem.
 * You want to reduce the number of dependencies between clients and the subsystem.
 * 
 */

// Subsystem1 class
class Subsystem1 {
    public operation1(): void {
        console.log("Subsystem1: operation1");
    }
}

// Subsystem2 class
class Subsystem2 {
    public operation2(): void {
        console.log("Subsystem2: operation2");
    }
}

// Facade class which provides a simplified interface to the complex subsystem
class Facade {
    private subsystem1: Subsystem1;
    private subsystem2: Subsystem2;

    constructor() {
        this.subsystem1 = new Subsystem1();
        this.subsystem2 = new Subsystem2();
    }

    public operation(): void {
        this.subsystem1.operation1();
        this.subsystem2.operation2();
    }
}

// Client code
const facade = new Facade();
facade.operation();
