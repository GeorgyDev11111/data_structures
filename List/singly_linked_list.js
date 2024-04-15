// Однонаправленный || односвязнный список
// Singly linked list


// structures
function Node(data, next = null) {
  this.data = data
  this.next = next
}

function List() {
  this.head = null
  this.size = 0
}

// methods
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

List.prototype.pop_front = function() {
  if(this.head == null) return undefined
  
  this.head = this.head.next
  this.size--
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



// [tests]
const assert = require("node:assert")

function messageRed(text) {
  return `\x1b[31m${text}\x1b[0m`
}

function test1() {
  // push_back
  const list = new List()
  list.push_back(1)

  assert.equal(list.getSize(), 1, messageRed("Test 1-1 failed"))
  assert.equal(list.get(0), 1, messageRed("Test 1-2 failed"))
}

function test2() {
  // push_front
  const list = new List()
  list.push_back(1)
  list.push_front(2)

  assert.equal(list.getSize(), 2, messageRed("Test 2-1 failed"))
  assert.equal(list.get(0), 2, messageRed("Test 2-2 failed"))
  assert.equal(list.get(1), 1, messageRed("Test 2-3 failed"))
}

function test3() {
  // pop_front
  const list = new List()

  assert.equal(list.pop_front(), undefined, messageRed("Test 3-1 failed") )

  list.push_back(1)
  list.push_front(2)
  list.pop_front()

  assert.equal(list.getSize(), 1, messageRed("Test 3-2 failed"))
}

function test4() {
  // pop_back
  const list = new List()

  assert.equal(list.pop_back(), undefined, messageRed("Test 4-1 failed"))

  list.push_back(1)
  list.push_back(2)
  list.pop_back()

  assert.equal(list.getSize(), 1, messageRed("Test 4-2 failed"))
}

function test5() {
  // get
  const list = new List()
  list.push_back(1)
  list.push_back(2)

  assert.equal(list.get(-1), undefined, messageRed("Test 5-1 failed"))
  assert.equal(list.get(1), 2, messageRed("Test 5-2 failed"))
  assert.equal(list.get(2), undefined, messageRed("Test 5-3 failed"))
}

function test6() {
  // insert
  const list = new List()
  list.push_back(1)
  list.push_back(3)
  list.insert(2, 1)

  assert.equal(list.get(1), 2, messageRed("Test 6-1 failed"))
  assert.equal(list.getSize(), 3, messageRed("Test 6-2 failed"))
  assert.equal(list.insert(2,100), undefined, messageRed("Test 6-3 failed"))
}

function test7() {
  // removeAt
  const list = new List()
  list.push_back(1)
  list.push_back(2)
  list.removeAt(1)

  assert.equal(list.getSize(), 1, messageRed("Test 7-1 failed"))
  assert.equal(list.removeAt(100), undefined, messageRed("Test 7-2 failed"))
}

function test8() {
  // getSize
  const list = new List()
  list.push_back(1)
  list.push_back(2)
  list.push_back(3)

  assert.equal(list.getSize(), 3, messageRed("Test 8-1 failed"))
}

// runs all tests
;(function() {
  test1()
  test2()
  test3()
  test4()
  test5()
  test6()
  test7()
  test8()
})()