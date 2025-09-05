

class Node { 
    constructor(new_data) { 
        this.data = new_data;
        this.next = null
    }
}
// traversing a linkedList 

function traverseList(head) { 
    let count = 0
    while(head !== null) { 
        console.log(head.data)
        // console.log(head.next)
        head = head.next
        // count ++ 
    }
    // return count
}

function searchInList(head, key) { 
    if(head === null) { 
        return false;
    }
    if(head.data === key) { 
        console.log("found match", head.data)
        return true
    }

    return searchInList(head.next, key)
}

function insertAtFront(head, newData) { 
    let curr = head 
    const newNode = new Node(newData)
    newNode.next = head

    return newNode
}

function main() { 
    let head = new Node(10)
    head.next = new Node(20)
    head.next.next = new Node(30)
    head.next.next.next = new Node(40)
    head.next.next.next.next = new Node(50)

    let data = 60
    head = insertAtFront(head, data)


    const result = traverseList(head) 
    console.log(result)

    // let key =30    
    // if(searchInList(head, key)) { 
    //     console.log("Yes")
    // }
    // else { 
    //     console.log("Not Found")
    // }
}

main()