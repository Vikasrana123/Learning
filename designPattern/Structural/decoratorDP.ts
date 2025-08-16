/****
 * Decorator Design Pattern
 * Definition: The Decorator Design Pattern is a structural design pattern that allows behavior to be added to individual objects,
 * either statically or dynamically, without affecting the behavior of other objects from the same class.
 *
 * It’s particularly useful in situations where:
 *
 * You want to add responsibilities to individual objects without affecting other objects.
 * You want to extend the functionality of classes in a flexible and reusable way.
 * You want to avoid a large number of subclasses to represent different combinations of behaviors.
 *
 */

// Text component interface
interface TextComponent {
    getContent(): string;
}

// Basic text class
class BasicText implements TextComponent {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

// Text decorator base class
abstract class TextDecorator implements TextComponent {
    protected component: TextComponent;

    constructor(component: TextComponent) {
        this.component = component;
    }

    public abstract getContent(): string;
}

// Bold decorator
class BoldDecorator extends TextDecorator {
    public getContent(): string {
        return `<b>${this.component.getContent()}</b>`;
    }
}

// Italic decorator
class ItalicDecorator extends TextDecorator {
    public getContent(): string {
        return `<i>${this.component.getContent()}</i>`;
    }
}

// Underline decorator
class UnderlineDecorator extends TextDecorator {
    public getContent(): string {
        return `<u>${this.component.getContent()}</u>`;
    }
}

// Client code
const text = new BasicText("Hello World");
console.log("Basic text:");
console.log(text.getContent());
// Output: Hello World

const boldText = new BoldDecorator(text);
console.log("\nBold text:");
console.log(boldText.getContent());
// Output: <b>Hello World</b>

const italicBoldText = new ItalicDecorator(boldText);
console.log("\nItalic and bold text:");
console.log(italicBoldText.getContent());
// Output: <i><b>Hello World</b></i>

const decoratedText = new UnderlineDecorator(italicBoldText);
console.log("\nUnderline, italic, and bold text:");
console.log(decoratedText.getContent());
// Output: <u><i><b>Hello World</b></i></u>
