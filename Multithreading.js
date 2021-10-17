// multithreading
// booleans for locking that change when it is accessed
// timeslicing can change instructions at any time
// fork and eater classes
// lookup a little help online
// mutexes, race conditions, deadlocks, timeslicing, multithreading, locking, threading, semaphours.
// prevent others from entering functions while running. "synchonized"
// MVP and MVC
// make things atomic


// only care about Eating, Eat recently, Thinking, Think recently, attempt to eat


function hello() {

    var array = [new Fork("A"),new Fork("B"),new Fork("C"),new Fork("D"),new Fork("E")];
    var eaterArray = [new Eater("Frank",array[0],array[1]),new Eater("Bill",array[1],array[2]),new Eater("Karl",array[2],array[3]),new Eater("Tom",array[3],array[4]),new Eater("Holm",array[4],array[0])];

    document.getElementById("timer").onclick = function() {
        eaterArray[0].eating();
        eaterArray[1].eating();
        eaterArray[2].eating();
        eaterArray[3].eating();
        eaterArray[4].eating();
    }
}

// a fork to eat spagetti
function Fork(title) {
    // need to track who has which fork?
    this.number = title;
    // is someone actively holding the fork.
    this.locked = false;
}

// going clockwise around the table (linked list for the eaters?)
function Eater(name,value1,value2) {
    // name them to keep track of who is who.
    this.name = name;
    // track that we have 2 forks in hand.
    this.forkCount = 0;
    // counterclockwise
    this.left = value1;
    // clockwise
    this.right = value2;
}

Eater.prototype.eating = function() {
    // grabbin the fork to the right
    if (!this.right.locked) {
        this.right.locked = true;
        this.forkCount +=1;
    }
    // grabbin the fork to the left
    if (!this.left.locked) {
        this.left.locked = true;
        this.forkCount +=1;
    }
    if (this.forkCount == 2) {
    // eating
    console.log(this.name + " is eating...");
    setTimeout(this.think,1000);
    }
    else {
        console.log(this.name + " Cannot get forks.");
        this.left.locked = false;
        this.right.locked = false;
        setTimeout(this.think,1000);
    }
}

Eater.prototype.think = function() {
    console.log(this.name + " is thinking...");
    setTimeout(this.eating,1000);
}
