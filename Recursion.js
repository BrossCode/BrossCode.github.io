// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

function hello() {
    arrSort(arr);
}

// storage vars for pointers
let i = 0;
let j = arr.length-1;
// leftmost
let storageLeft = arr[i];
// rightmost
let storageRight = arr[j];
// pivot
let pivot = arr[arr.length/2];

function arrSort(array) {
    // compare pivot point to leftmost var
    // if left is higher and right is lower
    if (pivot < storageLeft && pivot > storageRight){
        // swap values since they can be flipped around pointer
        array[i] = storageRight;
        array[j] = storageLeft;
    }
    if (pivot > storageLeft){
        // move over left pointer
        i += 1;
        // change value stored
        storageLeft = array[i];
        }
    if (pivot < storageRight){
        // move over right pointer
        j -= 1;
        // change value stored
        storageRight = array[j];
    }
    // end command
    if (i == array.length/2 && j == array.length/2){
        //log it
        console.log(array);
        // return it
        return array;
    }
    else {
        // log it
        console.log(array);
        // call function again
        arrSort(array);
    }
}