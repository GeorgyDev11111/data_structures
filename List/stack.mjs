// stack || стек, в основе лежит односвязный список

function Node(data, prev = null) {
  this.data = data
  this.prev = prev
}

export default function Stack() {
  this.top = null
  this.size = 0
}

// methods
Stack.prototype.push = function(data) {
  let node = new Node(data)

  if(this.top == null) {
    this.top = node
  } else {
    node.prev = this.top
    this.top = node
  }
  this.size++
}

Stack.prototype.pop = function() {
  if(this.size <= 0) return undefined

  const data = this.top.data
  this.top = this.top.prev
  this.size--

  return data
}

Stack.prototype.getTop = function() {
  return this.top.data
}

Stack.prototype.getSize = function() {
  return this.size
}
