
class Node { 
    constructor(new_Data) { 
        this.data = new_Data
        this.next = null
    }
}

function removeDuplicate(head){ 
    if(head.data === head.next.data){ 
        
        head = head.next
    }
}

function main() { 
    let head = new Node(10)
    head.next = new Node(20)
    head.next.next = new Node(30)
    head.next.next.next = new Node(40)
    head.next.next.next.next = new Node(50)

}