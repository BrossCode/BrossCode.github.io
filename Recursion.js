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
let pivot = arr[Math.floor(arr.length/2)];

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
        console.log(i);
        // change value stored
        storageLeft = array[i];
        console.log(storageLeft);
        }
    if (pivot < storageRight){
        // move over right pointer
        j -= 1;
        console.log(j);
        // change value stored
        storageRight = array[j];
        console.log(storageRight);
    }
    // end command
    if (i == pivot && j == pivot){
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