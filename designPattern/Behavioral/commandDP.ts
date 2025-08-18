/****
 * Command Design Pattern
 * Definition: The Command Design Pattern is a behavioral design pattern that turns a request into a stand-alone object.
 * This object contains all information about the request, allowing you to parameterize clients with different requests,
 * queue or log requests, and support undoable operations.
 */
// Command interface
interface Command {
    execute(): void;
    undo(): void;
}

// Receiver - The object that performs the actual operations
class Light {
    private isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log('Light is ON');
    }

    turnOff(): void {
        this.isOn = false;
        console.log('Light is OFF');
    }
}

// Concrete Commands
class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }
}

// Invoker - Holds and executes commands
class RemoteControl {
    private commands: Command[] = [];
    private undoStack: Command[] = [];

    addCommand(command: Command): void {
        this.commands.push(command);
    }

    executeCommand(index: number): void {
        if (index >= 0 && index < this.commands.length) {
            this.commands[index].execute();
            this.undoStack.push(this.commands[index]);
        }
    }

    undoLastCommand(): void {
        const command = this.undoStack.pop();
        if (command) {
            command.undo();
        }
    }
}

// Client code
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.addCommand(lightOn);
remote.addCommand(lightOff);

remote.executeCommand(0); // Turns light on
remote.executeCommand(1); // Turns light off
remote.undoLastCommand(); // Undoes last command (turns light on)