// need to create a linkedList. a linked list starts with the "head", which is the first "node". 
// each node has a .next value. this "points" the list at the next "node" that comes in that list.
// every node is an objects that contains an "element" and a "next" property.
// the last node in the chain returns a null for the "next" value.

// the list can also have a size variable that is seperate from the objects within it.
// can use while and for loops to iterate to a certain value in the list.

// Create a tail of the list

// Can now initialize a new list and add values to it.
var myList = new linkedList();


let Node = function(value) {
        // value at this node.
        this.value = value;
        // next node in chain (defaults to null (list will end on null)). 
        // This is setting a "pointer" for the list to locate the next node. Setting this value to another node is how it finds the node. Chains nodes together.
        this.next = null;
        // set to match the previous node in the chain.
        this.previous = null;
}

let linkedList = function() {
    // don't need to pass anything in when building a "new" list
        // start with the head which can be set to null at the start
        this.head = null;
        // every list will want a size variable that can be manipulated. Defaults to 0
        this.size = 0;
        // need a "tail" of the list
        this.tail = null;
}

    // need to be able to add nodes to my list with a function.
    linkedList.prototype.addAtEnd = function(value) {
        // create a node object here. pass value into node.
        let nodeNew = new Node(value);

        // need to save the current "node" that is present at the location we are adding this.
        let nodeCurrent;
        let nodePrevious;

        // replace current head if it is empty, since list is empty.
        if (this.head == null) {
            this.head = nodeNew;
        }
        else {
            // Putting our iteration variable at the start of the list
            nodeCurrent = this.head

            // move through the list with some sort of function
            for (let i = 0; i < this.size; i++) {
                nodePrevious = nodeCurrent;
                nodeCurrent = nodeCurrent.next;
            }

            // when we have reached the end of the list we add the node we made.
            nodeCurrent.next = nodeNew;
            // set previous
            nodeCurrent.previous = nodePrevious;
            // this adds it to the end so now it is the tail.
            this.tail = nodeNew;
            
        }
        // list should be 1 longer since we are done and need to update the size.
        this.size+= 1;
    }

    linkedList.prototype.addAtIndex = function(value,index) {
        // build a node with our value intake, initalize the object I created.
        let nodeNew = new Node(value);
        // iteration var needs to exist to go through list.
        let nodeCurrent;
        let nodePrevious;

        if (index > (this.size/2)) {
            nodeCurrent = this.tail;

            for (let i = this.size; i > index; i--){
                // track last node for .next
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.previous;
                // does this until we are done.
            }
            // set previous and next
            nodeNew.next = nodeCurrent;
            nodeNew.previous = nodeCurrent.previous;

            // set the node in the new spot.
            nodeCurrent = nodeNew;
        }

        else {
            //start from the head
            nodeCurrent = this.head;

            // iterate through the loop starting at the top.
            for (let i = 0; i < index; i++) {
                // set previous node
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.next;
                // does this until we are done.
            }
            // once we reach the end of the for loop, we change the stored node to the desired node.
            // set next to maintain chain.
            nodeNew.next = nodeCurrent.next;
            // set previous pointer
            nodeNew.previous = nodePrevious;
            // replace old node with new node.
            nodeCurrent.next = nodeNew;
            // if we added it to the end of the list
        }

        if (index == this.size) {
            this.tail = nodeNew;
        }

        // increase size of list.
        this.size += 1;
    }

    // put in a node at a specific index.
    // take in node value and a specified index location that is stored in a var.
    linkedList.prototype.replaceAtIndex = function(value,index) {
        // build a node with our value intake, initalize the object I created.
        let nodeNew = new Node(value);
        // iteration var needs to exist to go through list.
        let nodeCurrent;
        let nodePrevious;

        if (index > (this.size/2)) {
            nodeCurrent = this.tail;

            for (let i = this.size; i > index; i--){
                // track last node for .next
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.previous;
                // does this until we are done.
            }

            // set previous and next
            nodeNew.next = nodeCurrent.next;
            nodeNew.previous = nodeCurrent.previous;

            // set the node in the new spot.
            nodeCurrent = nodeNew;

        }
        else {
            nodeCurrent = this.head;

            // iterate through the loop starting at the top.
            for (let i = 0; i < index; i++) {
                // set previous
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.next;
                // does this until we are done.
            }

            // once we reach the end of the for loop, we change the stored node to the desired node.
            // set next to maintain chain.
            nodeNew.next = nodeCurrent.next;
            // set previous
            nodeNew.previous = nodePrevious;
            // replace old node with new node.
            nodeCurrent = nodeNew;
        }

        // if we added it to the end of the list
        if (index == this.size) {
            this.tail = nodeNew;
            }
        // increase size of list.
        this.size += 1;
    }

    // take in specified index location that is stored in a var.
    linkedList.prototype.deleteAtIndex = function(index) {
        // iteration var needs to exist to go through list.
        let nodeCurrent = this.head;
        // var to save last node to fix.
        let nodePrevious;

        if (index > (this.size/2)) {
            nodeCurrent = this.tail;

            for (let i = this.size; i > index; i--){
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.previous;
                // does this until we are done.
            }

            // set previous and next
            nodeNew.next = nodeCurrent.next;
            nodeNew.previous = nodeCurrent.previous;
            
            // set the node in the new spot.
            nodeCurrent.next = null;
            nodeCurrent.previous = null;
            nodeCurrent = null;

        }

        else {
            // iterate through the loop starting at the top.
            for (let i = 0; i < index-1; i++) {
                // save prior node for changing pointer later.
                nodePrevious = nodeCurrent;
                // set to the .next value that points to the next node in the list
                nodeCurrent = nodeCurrent.next;
                // does this until we are done.
            }
            // can change the pointers to remove the node from the list.
            nodePrevious.next = nodeCurrent.next;
            // set previous node
            nodeNew.previous = nodePrevious;

            // cleanup old node reference for collection (memory leaks)
            nodeCurrent.next = null;
            nodeCurrent.previous = null;
            nodeCurrent = null;
        }

        // change the tail if we removed the one at the end.
        if (index == this.size) {
            this.tail = nodePrevious;
        }

        // once we have our node at the index that we want to delete, we need to remove it and repoint the list. Does the node just cease to exist or is it taking up memory still?
        // decrease size of list.
        this.size -= 1;
    }

    // take in specified index location that is stored in a var.
    linkedList.prototype.getAtIndex = function(index) {
            // need a if statement for valid index here in practice.

            // iteration var needs to exist to go through list.
            let nodeCurrent;
            
            // iterate from the closest side
            if (index > (this.size/2)) {
                // place at tail
                nodeCurrent = this.tail;

                // iterate from the tail end
                for (let i = this.size; i > 0; i--){
                    // set to the .next value that points to the next node in the list
                    nodeCurrent = nodeCurrent.previous;
                    // does this until we are done.
                }
            }
            else {
                // set to the head
                nodeCurrent = this.head;

                // iterate through the loop starting at the top.
                for (let i = 0; i < index; i++) {
                    // set to the .next value that points to the next node in the list
                    nodeCurrent = nodeCurrent.next;
                    // does this until we are done.
                }
            }
            // return node value at end of loop.
            return nodeCurrent;
            // no change to size
    }