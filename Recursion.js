// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];
var a = 10;
var b = 25;

let storageCurrent;
let storageAtValue = 0;
let i = 0;

function hello() {
    gcd(a,b);
}

// gotta add a tracking array that can be changed
function arrSort() {
    for (let i = 0; i < arr.length; i++){
        // setstorage to it
        storageCurrent = arr[i];
        // search through the next var
        for (let j = 0; j < arr.length; j++){
            // compare storage to other var
            if (storageCurrent > arr[j]){
                // swap
                arr[i] = arr[j];
                arr[j] = storageCurrent;
                break;
            }
        }
    }
    console.log(arr);
    arrSort(arr);
}

function maxValue() {
    storageCurrent = arr[i];
    i += 1;
    if (storageCurrent > storageAtValue){
        storageAtValue = storageCurrent;
    }
    if (storageAtValue == tracker){
        console.log("exiting...")
        return storageAtValue;
    }
    console.log(storageAtValue);
    maxValue();
}

function printArray() {
    console.log(arr[i]);
    i += 1;
    if (i == arr.length - 1){
        return;
    }
    else {
        printArray();
    }
}

function gcd(a, b)
{
    // Everything divides 0
    if (a == 0){
    return b;
    }

    if (b == 0){
    return a;
    }

    // base case
    if (a == b) {
        return a;
    }

    // a is greater
    if (a > b) {
        return gcd(a-b, b);
    }
    return gcd(a, b-a);
}

function iterativeGcd(a,b){
    if (a > b){
        for (let i = b; i > 0; i--){
            if (a % i == 0){
                if (b % i == 0){
                    return i;
                }
            }
        }
    }
}