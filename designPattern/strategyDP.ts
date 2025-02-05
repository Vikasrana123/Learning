/** This is a Behavioral design Pattern
 
 *****This pattern is crucial for developing flexible, maintainable, and modular code, especially when multiple algorithms 
 might be applicable to solve a problem*****

 Real World Example : 
Navigation app:
 Choosing between different route calculation methods (shortest distance, fastest time, scenic route) based on user preference. 
Image processing:
 Selecting different image compression algorithms depending on the desired quality and file size. 
Text editor:
 Applying different text formatting options like bold, italic, or underline based on user selection. 
Sorting algorithms:
 Implementing different sorting algorithms (bubble sort, insertion sort, merge sort) and choosing the most suitable one based on the data set. 

*/

// Strategy Interface
interface Strategy {
    sort(data: any): any
}

// Concrete Strategy , Concrete Strategies are classes that implement the Strategy interface
class BubbleSort implements Strategy {
    // Override the base class logic
    sort(number: Array<Number>) {
        console.log("Running Inside Bubble Sort")
        //Implement Custome logic of sorting
    }
}
class QuickSort implements Strategy {
    // Override the base class logic
    sort(number: Array<Number>) {
        console.log("Running Inside Quick Sort")
        //Implement Custome logic of sorting
    }
}

// Context Class , The Context is the class that utilizes the Strategy. It references one of the strategies and can switch between them. 
class Sorter {
    strategy : Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }
    sortData(data: Array<Number>) {
        this.strategy.sort(data)
    }
}

//Client Class
class Client {
    sorter: any
    constructor() {
        this.sorter = new Sorter(new BubbleSort());
        this.sorter.sortData([1,2,3]);
        //Change Strategy
        this.sorter.setStrategy(new QuickSort())
        this.sorter.sortData([1,2,3])
    };
}
console.log(new Client())