// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

let storageCurrent;
let storageAtValue;
let i = 0;

function hello() {
    arrSort();
}

// gotta add a tracking array that can be changed
function arrSort() {
    // setstorage to it
    storageCurrent = arr[i];
    console.log(storageCurrent);
    i += 1;
    // search through the next var
    for (let j = 0; j < arr.length; j++){
        // compare storage to other var
        if (storageCurrent > arr[j]){
            // swap
            console.log(arr[j]);
            console.log(arr[i]);
            arr[i] = arr[j];
            arr[j] = storageCurrent;
            break;
        }
    }
    console.log(arr);
    arrSort(arr);
}