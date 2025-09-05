

class Node{ 
    constructor(new_data) { 
        this.data = new_data
        this.next = null
    }
}
function printList(head) { 
    let curr = head 
    while (curr !== null) { 
        console.log(curr.data)
        curr = curr.next ; 
    }
}

function insertData(head, new_Data, pos){
    let curr = head 

    if(pos < 1 ) { 
        return head 
    }
    if(pos === 1) { 
        let newNode = new Node(new_Data)
        newNode.next = head 
        return newNode
    }
    for(let i=0; i< pos-1; i++) { 
        curr = curr.next
    }
    if(curr === null) return head; 
    let newNode = new Node(new_Data)
    newNode.next = curr.next; 
    curr.next = newNode
    return head 
}


function main () {
    let head = new Node(10) 
    head.next = new Node(20)
    head.next.next = new Node(30)
    head.next.next.next = new Node(40)

    let newNodeData = 35 
    pos = 3

    head = insertData(head, newNodeData, pos )
    printList(head)
}

main()