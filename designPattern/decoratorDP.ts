/** Structural Pattern
 * The Decorator Design Pattern is a structural pattern used to dynamically add or modify behaviors of objects at runtime, 
 * without altering their existing structure.

 * Key Points:
✅ Used to extend functionalities without modifying the original class.
✅ Follows the Open-Closed Principle (open for extension, closed for modification).
✅ Uses composition instead of inheritance (wrapping an object instead of subclassing).

  * When to Use the Decorator Pattern?
✅When you need to add behavior dynamically without modifying the original class.
✅When subclassing would create too many subclasses.
✅When you want to follow the Open-Closed Principle.

Other real-world examples of the Decorator pattern:
✅Adding filters to an image editing software:
✅You can apply multiple filters (like brightness, contrast, blur) to an image one after another, each filter acting as a decorator. 
✅Adding features to a basic text editor: You can add functionalities like spell check, grammar check, or line numbering to a basic text editor through decorators. 
✅Wrapping a network request with error handling: You can create a decorator that adds error handling logic around a network request, providing additional functionality without changing the original request code. 
 */

//Interface of Coffee
interface Coffee {
    getCost(): any;
    getDescription(): any;

}

// Multiple Coffee like Plan Coffee , Black Coffee , Choclate Coffee that extends the 
class PlainCoffee implements Coffee {
    getCost() {
        return 10;
    }
    getDescription() {
        return `This is the plain coffee`
    }
}

class BlackCoffee implements Coffee {
    getCost() {
        return 15;
    }
    getDescription() {
        return `This is the black coffee`
    }
}

class ChoclateCoffee implements Coffee {
    getCost() {
        return 20;
    }
    getDescription() {
        return `This is the Choclate coffee`
    }
}

// This is decorator of the coffee
//Using this decorators i wll create the other object
abstract class CoffeeDecorator implements Coffee {
    coffee: Coffee;
    constructor(coffee: Coffee) {
        this.coffee = coffee
    }
    getCost() {
        return this.coffee.getCost();
    }
    getDescription() {
        return this.coffee.getDescription()
    }
}

// Now add Object in the Coffee Like Milk , Sugar etc

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee)
    }
    getCost() {
        return this.coffee.getCost() + 5;
    }
    getDescription() {
        return `${this.coffee.getDescription()} and milk`
    }
}
class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee)
    }
    getCost() {
        return this.coffee.getCost() + 3;
    }
    getDescription() {
        return `${this.coffee.getDescription()} and sugar`
    }
}
// Execute
let plainCoffee = new SugarDecorator(new MilkDecorator(new PlainCoffee()));
console.log(plainCoffee.getCost() , plainCoffee.getDescription())
let blackCoffee = new SugarDecorator(new MilkDecorator(new BlackCoffee()));
console.log(blackCoffee.getCost() , blackCoffee.getDescription())
