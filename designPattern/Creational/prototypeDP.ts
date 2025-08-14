/***
 * Prototype Design Pattern
 * 
 * Definition: The Prototype Design Pattern is a creational design pattern that allows for the creation of new objects by copying an existing object, 
 * known as the prototype. This pattern is particularly useful when the cost of creating a new instance of an object is more expensive than copying an existing one.
 * 
 * Problem 1: Encapsulation Gets in the Way
 *  This approach assumes that all fields of the object are publicly accessible. But in a well-designed system, many fields are private and hidden behind encapsulation. 
 *  That means your cloning logic can’t access them directly.
 *  Unless you break encapsulation (which defeats the purpose of object-oriented design), you can’t reliably copy the object this way.
 * 
 * Problem 2: Class-Level Dependency
    Even if you could access all the fields, you'd still need to know the concrete class of the object to instantiate a copy.
    This tightly couples your cloning logic to the object's class, which introduces problems:

    It violates the Open/Closed Principle.
    It reduces flexibility if the object's implementation changes.
    It becomes harder to scale when you work with polymorphism.
 *
 */

// Create a Interface
interface EnemyPrototype {
    clone(): EnemyPrototype;
    setHealth(health: number): void;
}

// Concrete Class
class Enemy implements EnemyPrototype {
    constructor(private name: string, private health: number) {}

    clone(): EnemyPrototype {
        return new Enemy(this.name, this.health);
    }
    setName(name: string) {
        this.name = name;
    }
    setHealth(health: number) {
        this.health = health;
    }
}

//Repository
class EnemyRepository {
    private enemies: Map<string, EnemyPrototype> = new Map();

    addEnemy(name: string, enemy: EnemyPrototype) {
        this.enemies.set(name, enemy);
    }

    getEnemy(name: string): EnemyPrototype | null {
        const enemy = this.enemies.get(name);
        return enemy ? enemy.clone() : null;
    }
}

//Client Class
class Game {
    private enemyRepo: EnemyRepository;

    constructor() {
        this.enemyRepo = new EnemyRepository();
    }

    addEnemy(name: string, enemy: EnemyPrototype) {
        this.enemyRepo.addEnemy(name, enemy);
    }

    getEnemy(name: string): EnemyPrototype | null {
        return this.enemyRepo.getEnemy(name);
    }
}

let game = new Game();
game.addEnemy("Goblin", new Enemy("Goblin", 100));
game.addEnemy("Orc", new Enemy("Orc", 200));

let goblinClone = game.getEnemy("Goblin")?.clone();
goblinClone?.setHealth(80);
let orcClone = game.getEnemy("Orc")?.clone();
orcClone?.setHealth(150);
