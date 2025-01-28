/** This is a Behavioral design Pattern

That lets you define a subscription mechanism to notify multiple objects about any events that 
happen to the object they’re observing.

The Observer pattern is a behavioral design pattern that establishes a one-to-many dependency between objects, 
so that when one object changes its state, all its dependents (observers) are automatically notified and updated. 
 
 ***/

//Observer (Subscriber) Interface
interface Subscriber {
    update(channelName: string, title: string): any
    updateEmail(channelName: string, title: string): any
}

// Concrete class of Subscriber
class YoutubeSubscriber implements Subscriber {
    subscriberName: string
    constructor(subscriberName: string) {
        this.subscriberName = subscriberName
    }
    update(channelName: string, title: string) {
        console.log(`Hello ${this.subscriberName} , New Video uploaded from ${channelName} that is ${title}`)
    }
    updateEmail(channelName: string, title: string) {
        console.log(`Hello ${this.subscriberName} , Calling from email logic New Video uploaded from ${channelName} that is ${title}`)
    }
}

//Subject Interface
interface Subject {
    addSubscriber(subscriber: Subscriber): any;
    removeSubscriber(subscriber: Subscriber): any;
    updateData(title: string): any;
    notifySubscriber(title: string): any
}
//Concrete class of Subject(Publisher)
class YoutubeChannel implements Subject {
    channelName: string
    constructor(channelName: string) {
        this.channelName = channelName
    }
    subscriberList: Array<Subscriber> = [];
    addSubscriber(subscriber: Subscriber) {
        this.subscriberList.push(subscriber);
        console.log("Added", this.subscriberList)
    }
    removeSubscriber(subscriber: Subscriber) {
        let index = this.subscriberList.findIndex(singleSubscriber => singleSubscriber == subscriber);
        this.subscriberList.splice(index, 1)
        console.log("After Removing", this.subscriberList)
    }
    updateData(title: string) {
        console.log("New Video Uploaded");
        // This is Notify all the member of this channel
        this.notifySubscriber(title)
    }
    notifySubscriber(title: string) {
        this.subscriberList.forEach(item => {
            item.update(this.channelName, title)
            item.updateEmail(this.channelName, title)
        })
    }
}

class ClientDemo {
    constructor() { }
    youtubeChannel = new YoutubeChannel('Tech World');
    subscriber1 = new YoutubeSubscriber('Pramita Ghosh');
    subscriber2 = new YoutubeSubscriber('Vikas Rana');

    run() {
        this.youtubeChannel.addSubscriber(this.subscriber1);
        this.youtubeChannel.addSubscriber(this.subscriber2);
        // Add New Video
        this.youtubeChannel.updateData("Hello New Tech Video");
        // Remove Subscribe
        this.youtubeChannel.removeSubscriber(this.subscriber2)
        this.youtubeChannel.updateData("Hello ChapGPT Video");

    }
}
console.log(new ClientDemo().run())