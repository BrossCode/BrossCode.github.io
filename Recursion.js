// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

// storage vars for pointers
let i = 0;
let j = arr.length-1;
// leftmost
let storageLeft = arr[i];
// rightmost
let storageRight = arr[j];
// pivot
let pivot = arr[Math.floor(arr.length/2)];

function hello() {
    arrSort(arr);
}

// gotta add a tracking array that can be changed
function arrSort(array) {
    // storage array
    let tempArr = array;
    // compare pivot point to leftmost var
    // if left is higher and right is lower
    if (pivot < storageLeft && pivot > storageRight){
        // swap values since they can be flipped around pointer
        tempArr[i] = storageRight;
        tempArr[j] = storageLeft;

        // log it
        console.log(tempArr);
        // swap it
        array = tempArr;
        // log again
        console.log("next iteration array " + array);
        // call function again
        arrSort(array);
    }
    if (pivot > storageLeft){
        // move over left pointer
        i += 1;
        console.log(i);
        // change value stored
        storageLeft = tempArr[i];
        console.log(storageLeft);
        }
    if (pivot < storageRight){
        // move over right pointer
        j -= 1;
        console.log(j);
        // change value stored
        storageRight = tempArr[j];
        console.log(storageRight);
    }
    // end command
    if (i == pivot && j == pivot){
        //log it
        console.log(tempArr);
        // return it
        return tempArr;
    }
    else {
        // log it
        console.log(tempArr);
        // swap it
        array = tempArr;
        // log again
        console.log("next iteration array " + array);
        // call function again
        arrSort(array);
    }
}