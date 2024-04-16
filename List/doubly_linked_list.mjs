// Двусвязный || двунаправленный список
// Doubly linked list


function Node(data , next = null, prev = null) {
  this.data = data
  this.next = next
  this.prev = prev
}

export default function List() {
  this.head = null
  this.tail = null
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

  if(this.size == 0) {
    this.head = node
    this.tail = node // update a link on tail
  } else {
    node.prev = this.tail
    this.tail.next = node
    this.tail = node // update a link on tail
  }

  this.size++
}

List.prototype.clear = function() {
  this.head = null
  this.tail = null
  this.size = 0
}

List.prototype.get = function(index) {
  if(index < 0 || index >= this.size) return undefined

  let current

  if(index <= this.size / 2) {
    current = this.head
    for(let i = 0; i < index; i++ ) current = current.next
  } else {
    current = this.tail
    for(let i = this.size - 1; i > index; i--) current = current.prev
  }

  return current.data
}

List.prototype.getSize = function() {
  return this.size
}

List.prototype.push_front = function(data) {
  this.head = new Node(data, this.head)
  this.size++
}


List.prototype.insert = function(data, index) {
  if(index < 0 || index > this.size) return undefined

  if(index == 0) return this.push_front(data)
  if(index == this.size) return this.push_back(data)

  let current
  if(index < this.size / 2) {
    current = this.head
    for(let i = 0; i < index; i++) {
      current = current.next
    }
  } else {
    current = this.tail
    for(let i = this.size - 1; i > index; i--) {
      current = current.prev
    }
  }

  let node = new Node(data, current, current.prev)
  current.prev.next = node
  current.prev = node

  this.size++
}

List.prototype.removeAt = function(index) {}
List.prototype.pop_back = function() {}