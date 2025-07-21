// SOLID Principle

/*** Single Responsibilty
 * 
 * Definition: A class should have only one reason to change, meaning it should have only one primary responsibility
 * 
 *  ***/
class Marker {
    myPrice = 10; // Class Property
    static myMarker = 'Red' //Static Variable
    name: string;
    price: number;
    color: string;
    constructor(name = 'New', price = 10, color = 'Black') {
        this.name = name; // Instance Variable
        this.price = price;
        this.color = color;
    }
    get markerInfo() {
        return this.name
    }
    set markerInfo(name: string) {
        this.name = name
    }
}
class CalculatePrice extends Marker {
    quantity: number;
    constructor(quantity: number) {
        super()
        this.quantity = quantity
    }
    calculateLogic() {
        return (this.quantity * this.price)
    }
}
const calculateLogic = new CalculatePrice(1)
console.log(calculateLogic.calculateLogic())

/*** End Single Responsibilty ***/


/*** Open for Extention but closed for Modification
 * 
 * 
 * Definition: A class should be open for extension but closed for modification
 * 
 *  ***/
class Invoice {
    save() {
        return "Save Parent"
    }
}
class SaveMarkerInvoiceDB extends Invoice {
    constructor() {
        super()
    }
    //Override
    save() {
        // Save in DB
        return 'Save into DB';
    }
}
class SaveMarkerInvoiceFile extends Invoice {
    constructor() {
        super()
    }
    save() {
        // Save in File
        return 'Save into File';
    }

}
console.log(new SaveMarkerInvoiceDB().save())
/*** End Open for Extention but closed for Modification ***/

/** Liskov Substitution Principle 
 * 
 * Definition: The child class must honor the "contract" of the parent class. It can add new features, 
 * but it can't change or remove the core functionality of the parent in a way that would break the program.
 * 
 * Definition: A child class should be able to do everything its parent class can do without causing any problems.
*/
class Bird {
    layEgg() { }
}

class FlyingBird extends Bird {
    fly() { }
}

class SwimmingBird extends Bird {
    swim() { }
}

class Eagle extends FlyingBird { }

class Penguin extends SwimmingBird { }

const penguin = new Penguin();
penguin.swim();
penguin.layEgg();

const eagle = new Eagle();
eagle.fly();
eagle.layEgg();

/** End Liskov Substitution Principle */


/** Interface Segregation Principle
 * 
 * Definition: A class should not be forced to implement interfaces it does not use.
*/

// A specific interface for entities that can work
interface IWorkable {
  work(): void;
}

// A specific interface for entities that can eat
interface IEatable {
  eat(): void;
}


// HumanWorker can both work and eat
class HumanWorker implements IWorkable, IEatable {
  public work(): void {
    console.log("Human is working on the assembly line.");
  }

  public eat(): void {
    console.log("Human is taking a lunch break.");
  }
}

// RobotWorker only implements the functionality it needs: work
class RobotWorker implements IWorkable {
  public work(): void {
    console.log("Robot is assembling a component.");
  }
}

// A function that only needs workers that can work
function manageWork(worker: IWorkable) {
  worker.work();
}

const human = new HumanWorker();
const robot = new RobotWorker();

// Both can be passed to a function that expects something that can work
manageWork(human); // Output: Human is working on the assembly line.
manageWork(robot); // Output: Robot is assembling a component.

// The `eat` method is only available on the HumanWorker
human.eat(); // Output: Human is taking a lunch break.
// robot.eat(); // This would now cause a compile-time error, which is good!

/** End Interface Segregation Principle */



/***Dependency Inversion Principle
 *
 * Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Abstractions should not depend on details. Details should depend on abstractions.
 *
 * This principle is about decoupling code, making it more modular and easier to manage.
 */

// --- Step 1: Create an Abstraction (the contract) ---
// This interface defines what any database connection should be able to do.
interface DBConnectionInterface {
  connect(): void;
}


// --- Step 2: Create Low-level Modules that Depend on the Abstraction ---
// These concrete classes implement the interface.
class MySqlConnection implements DBConnectionInterface {
  public connect(): void {
    console.log("Connecting to a MySQL database...");
  }
}

class PostgreSqlConnection implements DBConnectionInterface {
  public connect(): void {
    console.log("Connecting to a PostgreSQL database...");
  }
}


// --- Step 3: The High-level Module also Depends on the Abstraction ---
// It no longer creates its own dependency. It receives it via its constructor.
class PasswordReminder {
  private dbConnection: DBConnectionInterface; // Depends on the interface!

  constructor(dbConnection: DBConnectionInterface) {
    // The dependency is "injected" from the outside.
    this.dbConnection = dbConnection;
  }

  public remindPassword(): void {
    this.dbConnection.connect();
    console.log("Finding password and sending a reminder...");
  }
}

// --- Usage ---
// Now we can easily switch the dependency without changing the PasswordReminder class.

// Use MySQL
const mySql = new MySqlConnection();
const reminderWithMySql = new PasswordReminder(mySql);
reminderWithMySql.remindPassword();
// Output:
// Connecting to a MySQL database...
// Finding password and sending a reminder...

console.log("---");

// Use PostgreSQL
const postgreSql = new PostgreSqlConnection();
const reminderWithPostgreSql = new PasswordReminder(postgreSql);
reminderWithPostgreSql.remindPassword();
// Output:
// Connecting to a PostgreSQL database...
// Finding password and sending a reminder...```

//By adhering to the Dependency Inversion Principle, our `PasswordReminder` class is now completely decoupled from the specific database implementation. This makes our system more flexible, easier to maintain, and significantly easier to test, as we could now create a `MockDatabaseConnection` for our unit tests.

/** End Dependency Inversion Principle */