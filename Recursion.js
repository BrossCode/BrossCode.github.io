// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];
var a = 28;
var b = 80;
var string = "hello";

let storageCurrent;
let storageAtValue = 0;
let i = 0;

function hello() {
    reverseString(string,0);
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
                return;
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
        return;
    }
    console.log(storageAtValue);
    maxValue();
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

function iterativeGcd(a,b){
    for (let i = Math.min(a,b); i > 0; i--){
        if (a % i == 0 && b % i == 0){
                return i;
        }
    }
}

function reverseString(s,i){
    // take in letter at i
    let r;
    r += s.charAt(s.length-i);
    // increase i
    i++;
    // if we reach the end
    if (i == string.length){
        return r;
    }
    // otherwise call again
    else {
        reverseString(s,i);
    }
}

let Node = function(data){
        this.data = data;
        this.left = null;
        this.right = null;
}

let BinarySearchTree = function(){
        // root of the tree
        this.root = null;
}

BinarySearchTree.prototype.insert = function(data) {
    // create a node
    var newNode = new Node(data);

    // linkedlist things
    if (this.root == null) {
        this.root = newNode;
    }

    // iteration time pogchamp
    else {
        // calling another prototype insert function
        // checking left and right with recursion
        this.insertNode(this.root,newNode);
    }
}

BinarySearchTree.prototype.insertNode = function() {
    if (newNode.data < node.data) {
        // check left for null
        if (node.left == null) {

        }
        else {
            // if left node is not null, recur until a null is found
            this.insertNode(node.left, newNode);
        }
    }
    else {
        // check right for null
        if (node.right == null) {
            node.right = newNode;
        }
        else {
            // recur until it is found
            this.insertNode(node.right, newNode);
        }
    }
}
