// SOLID Principle

/*** Single Responsibilty ***/
class Marker {
    myPrice = 10; // Class Property
    static myMarker = 'Red' //Static Variable
    constructor(name = 'New', price = 10, color = 'Black') {
        this.name = name; // Instance Variable
        this.price = price;
        this.color = color;
    }
    get markerInfo() {
        return this.name
    }
    set markerInfo(name) {
        this.name = name
    }
}
// This follow the Single Responsibilty
class CalculatePrice extends Marker {
    constructor(quantity) {
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


/*** Open for Extention but closed for Modification ***/
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
        return 'Save into DB'
    }
}
class SaveMarkerInvoiceFile extends Invoice {
    constructor() {
        super()
    }
    save() {
        // Save in File
    }
}
console.log(new SaveMarkerInvoiceDB().save())
/*** End Open for Extention but closed for Modification ***/

/** Liskov Substitution Principle */
class Bird {
    layEgg() { }
}

class FlyingBird {
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


