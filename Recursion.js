// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

function hello() {
    function arrSort(array) {
        let storage;
        for (let i = 0; i < array.length; i++){
            if (array[i-1] > array[i]){
                storage = array[i];
                array[i] = array[i-1];
                array[i-1] = storage;
            }
        }
        console.log(arr);
    }
}