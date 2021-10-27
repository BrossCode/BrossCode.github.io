// binary tree

var arr = [5,2,3,8,9,6,12,67,89,125,82,16,21,92,33,62,81,150,225,981,44,64,72,71,52,53];

function hello() {
    let bahamut = new BinarySearchTree();
    for(let i = 0; i < arr.length; i++){
        bahamut.insert(arr[i]);
    }
    bahamut.searchNodes(bahamut.root,52);
    console.log(bahamut);
}

function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    // root of the tree
    this.root = null;
}

BinarySearchTree.prototype.insert = function(data) {
    let node = new Node(data);
        // if the root is null, newNode goes here.
        if (this.root == null) {
            this.root = node;
            return;
        }
        else this._insertNode(this.root,node);
}

BinarySearchTree.prototype._insertNode = function(node, newNode) {
    // node is empty, fill node
    if (node == null) {
        node = newNode;
    }
    // check left
    if (newNode.data < node.data){
        // recurse
        this._insertNode(node.left, newNode);
    }
    // go right
    else this._insertNode(node.right, newNode);
}

BinarySearchTree.prototype.searchNodes = function(node,data) {
    // start at root
    if (node == data) {
        return node;
    }
    // did not find value
    else if (node == null){
        return null;
    }
    // check right
    else if (data < node.data){
        this.searchNodes(node.left,data);
    }
    // checking the right otherwise
    else {
        this.searchNodes(node.right,data);
    }
}