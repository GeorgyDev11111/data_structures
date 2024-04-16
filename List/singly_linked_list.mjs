// Однонаправленный || односвязнный список
// Singly linked list


// structures
function Node(data, next = null) {
  this.data = data
  this.next = next
}

export default function List() {
  this.head = null
  this.size = 0
}

// methods
List.prototype.pop_front = function() {
  if(this.head == null) return undefined
  
  this.head = this.head.next
  this.size--
}

List.prototype.push_back = function(data) {
  let node = new Node(data)

  if(this.head == null) {
    this.head = node
  } else {
    let current = this.head
    while(current.next != null) {
      current = current.next
    }
    current.next = node
  }
  this.size++
}

List.prototype.clear = function() {
  this.head = null
  this.size = 0
}

List.prototype.get = function(index) {
  if(index < 0 || index >= this.size) return undefined
  
  let inner_index = 0
  let current = this.head

  while(current != null) {
    if(inner_index == index) {
      return current.data
    }
    current = current.next
    inner_index++
  }
}

List.prototype.getSize = function() {
  return this.size
}

List.prototype.push_front = function(data) {
  this.head = new Node(data, this.head)
  this.size++
}


List.prototype.insert = function(data,index) {
  if(index < 0 || index >= this.size) return undefined

  if(index == 0) {
    this.push_front(data)
  } else {
    let previous = previousF(this.head, index) 
    previous.next = new Node(data, previous.next)
    this.size++
  }
}

List.prototype.removeAt = function(index) {
  if(index < 0 || index >= this.size) return undefined

  if(index == 0) {
    this.pop_front()
  } else {
    let previous = previousF(this.head, index)
    previous.next = previous.next.next
    this.size--
  }
}

List.prototype.pop_back = function() {
  return this.removeAt(this.size - 1)
}

function previousF(head, index) {
  let current = head
  for(let i = 0; i < index - 1; i++) {
    current = current.next
  }
  return current
}