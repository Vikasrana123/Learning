/**
 * Iterator Design Pattern
 * Definition: The Iterator Pattern is a design pattern that allows sequential access to elements in a collection without exposing the underlying 
 * representation.
 */

// Interface for Iterator
interface IIterator<T> {
    hasNext(): boolean;
    next(): T | null;
}

// Interface for Collection
interface ICollection<T> {
    getIterator(): IIterator<T>;
    add(item: T): void;
}

/**
 * Concrete Iterator class that implements the Iterator interface
 * Provides methods to traverse through the collection
 */
class Iterator<T> implements IIterator<T> {
    private collection: T[];
    private index: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }

    public hasNext(): boolean {
        return this.index < this.collection.length;
    }

    public next(): T | null {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    }
}

/**
 * Concrete Collection class that implements the Collection interface
 * Manages the collection of items and provides an iterator
 */
class IterableCollection<T> implements ICollection<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<T> {
        return new Iterator(this.items);
    }
}

// Client code
const collection = new IterableCollection<number>();
collection.add(1);
collection.add(2);
collection.add(3);

const iterator = collection.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}