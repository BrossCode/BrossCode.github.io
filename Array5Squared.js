function hello() {
    var fucker = new MyList();
    console.log(fucker);
    fucker.addAtIndex(4,2);
    fucker.deleteAtIndex(2);
}

function MyList() {
    // holds values
    this._arr = new Array(5);
    // nothing is in the array yet. tracks the number of non-undefined values in an array.
    this.length = 0;
    // current max length
    this.lengthMax = 5;
}

MyList.prototype.addAtIndex = function(value,index) {
    console.log(this._arr);
    console.log(this._arr[1]);
    console.log("length: " + this.length + "Max Length: " + this.lengthMax);
    // doubles the size of the array if we are at capacity for actual values
    if (this.length == this.lengthMax) {
        console.log("Doubling Array Size...");
        // create tempory array
        temparr = new Array(this.lengthMax*2);
        console.log(temparr._arr);
        // start a loop to fill in new array with old values.
        for (let i = 0; i < this.lengthMax; i++) {
            // put thing in old array in new array.
            temparr[i] = this._arr[i];
        }
        // swap out arrays
        this._arr = temparr._arr;
        // increase the length max incase we have to expand again later.
        this.lengthMax = this.lengthMax*2;
        console.log(this._arr);
    }
    // storage
    let storage = value;

    // track if we are adding a new value to the array and increase the length.
    console.log(this._arr[index]);
    if (this._arr[index] == undefined) {
        this.length += 1;
    }

    // now we can add at the index.
    for (let i = index; i < this.lengthMax; i++) {
        // change values
        this._arr[i] = storage;
        // start moving values
        storage = this._arr[i+1];
    }
    // increase length of defined values in array
    console.log(this._arr);
}

MyList.prototype.deleteAtIndex = function(index) {
    console.log("Delete.");
    // stop if nothing in array
    if (this.length == 0){
        console.log("Array already empty");
    }

    else {
        // storage var
        let storage = null;

        // looping though the array
        for (let i = index; i < this.lengthMax; i++) {
            // delete at location
            this._arr[i] = this._arr[i+1];
        }
        // adjust length
        this.length -=1;
        console.log(this._arr);
    }
}