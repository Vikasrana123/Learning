// The Pillars of OOP: Fundamental Concepts

/***
 * ENCAPSULATION
 * 
 * Definition: Encapsulation is the concept of hiding the implementation details of an object from the outside world and only exposing the necessary
 *  information through public methods.
 
    public: Members are accessible from anywhere. This is the default if no modifier is specified
    private: Members are only accessible from within the class they are declared in.
    protected: Members are accessible within the class they are declared in and by instances of its subclasses.
*/
class BankAccount {
  private _balance: number = 0;
  public readonly accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  public getBalance(): number {
    return this._balance;
  }
}

const myAccount = new BankAccount("123456789");
myAccount.deposit(1000);
// console.log(myAccount._balance); // Error: Property '_balance' is private and only accessible within class 'BankAccount'.
console.log(myAccount.getBalance()); // Output: 1000
// myAccount.accountNumber = "987654321"; // Error: Cannot assign to 'accountNumber' because it is a read-only property.

/*** END ENCAPSULATION ***/

/*** 
 * INHERITANCE 
 * 
  Definition: Inheritance is a mechanism that allows a class to inherit properties and methods from another class, called the superclass or parent class.
***/


/*** 
 
 Polymorphism: One Interface, Many Forms

Polymorphism allows objects of different classes to be treated as objects of a common superclass. 
It is often achieved through method overriding, where a subclass provides its own implementation of a method that is 
already defined in its superclass. 

A common way to achieve polymorphism is method overriding.

  * Definition: Polymorphism allows methods to do different things based on the object it is acting upon, even if they share the same name.

*/


/***
 * Abstract Classes
 * Abstraction is the concept of showing only the necessary information to the outside world while hiding unnecessary details.
 * Definition: An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed.
 * It can contain abstract methods (without implementation) and concrete methods (with implementation).
 */

abstract class Payment {
    // Abstract method: must be implemented by subclasses
    abstract pay(amount: number): void;

    // Concrete method: has implementation
    generateReceipt(): void {
        console.log("Receipt generated.");
    }
}

class CreditCardPayment extends Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} via Credit Card.`);
    }
}

class PayPalPayment extends Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} via PayPal.`);
    }
}

// Usage
const payment1: Payment = new CreditCardPayment();
const payment2: Payment = new PayPalPayment();

payment1.pay(100);
payment1.generateReceipt();

payment2.pay(250);
payment2.generateReceipt();



// Abstraction vs. Encapsulation (Important Distinction)
// Many confuse these two:

// Aspect	Abstraction	Encapsulation
// What	Hides implementation details.	Hides data by restricting direct access.
// Focus	Focus on what an object does.	Focus on how the object’s data is protected.
// Tool	Achieved via abstract classes & interfaces.	Achieved via access modifiers (private, protected, public).




