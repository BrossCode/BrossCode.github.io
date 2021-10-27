// Recursion


function hello() {
    console.log("arrSort:");
    arrSort([0,25,63,57,43],0);
    arrSort([1,4,4,6,7,8,8,8],0);
    arrSort([102844,540892,999234,106601,230242,922322],0);

    console.log("maxValue:");
    maxValue([5,98,323,6,9292,7,434,821],0,0);
    maxValue([1,1,1,1,1,1,1,1,1,1,1],0,0);
    maxValue([53345,43545,13213,43656,86686,96767],0,0);

    console.log("printArray:");
    printArray([13213,23333,2,1,"hey","printing!","oh god look at all this print"]);
    printArray([32,3213,.2323,4324.32,""]);

    console.log("gcd:");
    gcd(35,81);
    gcd(333,999);
    gcd(4,4);
    gcd(0,0);
    gcd(0,6);
    gcd(121,0);
    gcd(21,69);

    console.log("recursiveReverse:");
    recursiveReverse("hello",0);
    recursiveReverse("ungabunga",0);
    recursiveReverse("oof some spaces",0);
    recursiveReverse("lets add some 123",0);


}

function arrSort(array,runs) {
    for (let i = 0; i < array.length-1; i++){
        // setstorage to it
        let storageCurrent = array[i];
        // search through the next var
        for (let j = array.length-1; j > 0; j--){
            // compare storage to other var
            if (storageCurrent > array[j]){
                // swap
                let swap = array[j];
                array[i] = swap;
                array[j] = storageCurrent;
                // is that brute force I spy?
                storageCurrent = 0;
                i = array.length;
                j = 0;
            }
        }
    }
    if (runs == array.length-1){
        return;
    }
    console.log(array);
    arrSort(array,runs+1);
}

function maxValue(array,i,n) {
    let storageCurrent = array[i];
    let storageAtValue = n;
    if (storageCurrent > storageAtValue){
        storageAtValue = storageCurrent;
    }
    if (i == array.length-1){
        console.log("exiting...")
        return storageAtValue;
    }
    return maxValue(array,i+1,storageAtValue);
}

function printArray(array) {
    if(array.length == 0){
        return;
    }
    // base case
    let firstItem = array.shift();
    console.log(firstItem);
    printArray(array);
}

function gcd(a,b){
    if (b == 0){
        return a;
    }
    else{
        return gcd(b, a % b);
    }
}

function recursiveReverse(s, count){
    // Base case
    let i = count;
    if(i == Math.floor(s.length/2)) {
        return s;
    }

    // Else swap
    let r =
    s.substring(0, i) + // pre i
    s.charAt(s.length-1-i) + // swap 1
    s.substring(i+1, s.length-1-i) + // middle
    s.charAt(i) + // swap 2
    s.substring(s.length-i); // post i
    console.log(r);

    return recursiveReverse(r, i+1);
}