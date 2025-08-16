/****
 * ADAPTOR DESIGN PATTERN
 * Definition: The Adapter Design Pattern is a structural design pattern that allows incompatible interfaces to
 * work together by converting the interface of one class into another that the client expects.
 * 
 * It’s particularly useful in situations where:

        You’re integrating with a legacy system or a third-party library that doesn’t match your current interface.
        You want to reuse existing functionality without modifying its source code.
        You need to bridge the gap between new and old code, or between systems built with different interface designs.
*/

// Target interface which your current system accepts
interface Target {
    request(): string;
}

// Legacy class which has a different interface
class Adaptee {
    specificRequest(): string {
        return "Specific request";
    }
}

// Adapter class which makes the Adaptee compatible with the Target interface
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): string {
        return this.adaptee.specificRequest();
    }
}

// Client code which works with the Target interface
function clientCode(target: Target) {
    console.log(target.request());
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
clientCode(adapter);
