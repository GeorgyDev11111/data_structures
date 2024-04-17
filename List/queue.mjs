// queue || очередь, в основе лежит двусвязный список

function Node(data, next = null, prev = null) {
  this.data = data
  this.next = next
  this.prev = prev
}

export default function Queue() {
  this.head = null
  this.tail = null
  this.size = 0
}

Queue.prototype.push = function(data) {
  let node = new Node(data)

  if(this.size == 0) {
    this.head = this.tail = node
  } else {
    node.prev = this.tail
    this.tail.next = this.tail = node
  }

  this.size++
}

Queue.prototype.pop = function() {
  if(this.head == null) return undefined

  this.head = this.head.next
  this.size--
}

Queue.prototype.front = function() {
  return this.head.data
}

Queue.prototype.back = function() {
  return this.tail.data
}

Queue.prototype.getSize = function() {
  return this.size
}