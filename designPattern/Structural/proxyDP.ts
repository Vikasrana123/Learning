/***
 * Proxy Design Pattern
 * 
 * Definition: Proxy is a structural design pattern that lets you provide a substitute or placeholder for 
 * another object. A proxy controls access to the original object, allowing you to perform something either 
 * before or after the request gets through to the original object.


 *
 * It’s particularly useful in situations where:
 *
 * You want to control access to an object.
 * You want to add additional functionality (e.g., logging, access control) to an object without modifying it.
 * You want to create a placeholder for a resource that is expensive to create.
 * 
 * Solution:
 * 
 * The Proxy pattern suggests that you create a new proxy class with the same interface as an original service 
 * object. Then you update your app so that it passes the proxy object to all of the original object’s clients. 
 * Upon receiving a request from a client, the proxy creates a real service object and delegates all the work 
 * to it.
 * 
 * Benefit:
 * 
 * But what’s the benefit? If you need to execute something either before or after the primary logic of the 
 * class, the proxy lets you do this without changing that class. Since the proxy implements the same interface
 * as the original class, it can be passed to any client that expects a real service object.


 */

// Subject interface
interface Image {
    display(): void;
}

// Real subject
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk(): void {
        console.log(`Loading ${this.filename}`);
    }

    public display(): void {
        console.log(`Displaying ${this.filename}`);
    }
}

// Proxy
class ProxyImage implements Image {
    private realImage: RealImage | undefined;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    public display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Client code
const image1: Image = new ProxyImage("image1.jpg");
const image2: Image = new ProxyImage("image2.jpg");

image1.display(); // Loading image1.jpg \n Displaying image1.jpg
image1.display(); // Displaying image1.jpg
image2.display(); // Loading image2.jpg \n Displaying image2.jpg
