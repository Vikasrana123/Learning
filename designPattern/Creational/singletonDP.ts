// Singleton Design Pattern
// Ensures a class has only one instance and provides a global point of access to it.

class Singleton {
    private static instance: Singleton;

    // Private constructor to prevent instantiation from outside
    private constructor() {
        console.log("Singleton instance created.");
    }

    // Static method to get the single instance of the class
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Method called on singleton instance.");
    }
}

// Usage

const singleton1 = Singleton.getInstance();
singleton1.someMethod();

const singleton2 = Singleton.getInstance();
singleton2.someMethod();

// Check if both instances are the same
console.log(singleton1 === singleton2); // true

// Output:
// Singleton instance created.
// Method called on singleton instance.
// Method called on singleton instance.
// true
// This confirms that both `singleton1` and `singleton2` are the same instance of the Singleton class.
// The Singleton pattern is useful when you need to control access to a shared resource, such as a configuration object or a connection pool, ensuring that only one instance exists throughout the application lifecycle.
// It helps in reducing memory usage and provides a global point of access to the instance, making it easier to manage shared resources.    
