/****
 * Observer Design Pattern
 *
 * Definition: The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when 
 * one object changes state, all its dependents are notified and updated automatically.
 * 
 * The Observer Pattern solves this by decoupling the subject and its observers, allowing them to interact through a common interface. `
 * Observers can be added or removed at runtime, and the subject doesn’t need to know who they are — just that they implement a specific interface.


 */

// Interface for observers (subscribers)
interface FitnessObserver {
    update(data: any): void;
}

// Subject (Observable) - Fitness Watch
class FitnessWatch {
    private observers: FitnessObserver[] = [];
    private steps: number = 0;
    private heartRate: number = 0;

    public subscribe(observer: FitnessObserver): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: FitnessObserver): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }

    public updateSteps(steps: number): void {
        this.steps = steps;
        this.notify({ type: 'steps', value: steps });
    }

    public updateHeartRate(rate: number): void {
        this.heartRate = rate;
        this.notify({ type: 'heartRate', value: rate });
    }
}

// Concrete Observers
class LiveFeedDisplay implements FitnessObserver {
    update(data: any): void {
        console.log(`LiveFeed: ${data.type} updated to ${data.value}`);
    }
}

class MobileNotification implements FitnessObserver {
    update(data: any): void {
        console.log(`📱 Notification: Your ${data.type} is ${data.value}`);
    }
}

class HealthMetricsAnalyzer implements FitnessObserver {
    update(data: any): void {
        console.log(`Analyzing ${data.type}: ${data.value}`);
    }
}

// Usage Example
const watch = new FitnessWatch();
const liveFeed = new LiveFeedDisplay();
const notification = new MobileNotification();
const analyzer = new HealthMetricsAnalyzer();

watch.subscribe(liveFeed);
watch.subscribe(notification);
watch.subscribe(analyzer);

watch.updateSteps(1000);
watch.updateHeartRate(75);