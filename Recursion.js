// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

let storageCurrent;
let storageAtValue;

function hello() {
    arrSort(arr);
}

// gotta add a tracking array that can be changed
function arrSort(array) {
    // grab a value
    for (let i = 0; i < arr.length; i++){
        // setstorage to it
        storageCurrent = array[i];
        // search through the next var
        for (let j = 0; j < arr.length; j++){
            // compare storage to other var
            if (storageCurrent > array[j]){
                // swap
                arr[i] = arr[j];
                arr[j] = storageCurrent;
            }
        }
    }
    arrSort(arr);
}