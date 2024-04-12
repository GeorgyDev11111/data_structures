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

List.prototype.push_back = function (data) {
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

List.prototype.get = function (index) {
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

List.prototype.size = function () {
  return this.size
}

List.prototype.push_front = function (data) {
  this.head = new Node(data, this.head)
  this.size++
}

List.prototype.pop_front = function () {
  if(this.head == null) return
  
  this.head = this.head.next
  this.size--
}

List.prototype.insert = function (data,index) {
  if(index == 0) {
    this.push_front(data)
  } else {
    let previous = previousF(this.head, index) 
    previous.next = new Node(data, previous.next)
    this.size++
  }
}

List.prototype.removeAt = function (index) {
  if(index == 0) {
    this.pop_front()
  } else {
    let previous = previousF(this.head, index)
    previous.next = previous.next.next
    this.size--
  }
}

List.prototype.pop_back = function () {
  this.removeAt(this.size - 1)
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

function format(data) {
  return JSON.stringify(data)
}

function messageRed(text) {
  return `\x1b[31m${text}\x1b[0m`
}

function runTests() {
  test1()
  test2()
  test3()
  test4()
  test5()
  test6()
  test7()
  test8()
  test9()
  test10()
  test11()
  test12()
  test13()
  test14()
  test15()
}

function test1() {
  // push_back
  let test = new List()

  test.push_back(42)
  assert.equal(format(test), format({"head":{"data":42,"next":null},"size":1}), messageRed("Test 1 failed"))
}

function test2() {
  // push_back
  let test = new List()

  test.push_back(42)
  test.push_back(45)
  assert.equal(
    format(test), 
    format({"head":{"data":42,"next":{"data":45,"next":null}},"size":2}), messageRed("Test 2 failed")
  )
}

function test3() {
  // get
  let test = new List()

  let result = test.get(1)
  assert.equal(result, undefined, messageRed("Test 3 failed"))
}

function test4() {
  // get
  let test = new List()

  test.push_back(35)
  test.push_back(36)
  test.push_back(37)
  let result = test.get(1)
  assert.equal(result, 36, messageRed("Test 4 failed"))
}

function test5() {
  // get
  let test = new List()

  test.push_back(35)
  test.push_back(36)
  test.push_back(37)
  let result = test.get(2)
  assert.equal(result, 37, messageRed("Test 5 failed"))
}

function test6() {
  // push_front
  let test = new List()

  test.push_front(35)
  assert.equal(
    format(test), 
    format({head: { data: 35, next: null }, size: 1}), messageRed("Test 6 failed")
  )
}

function test7() {
  // push_front
  let test = new List()

  test.push_front(35)
  test.push_front(34)
  assert.equal(
    format(test),
    format({head: { data: 34, next: {data: 35, next: null}}, size: 2}), messageRed("Test 7 failed")
  )
}

function test8() {
  // pop_front
  let test = new List()

  test.push_back(35)
  test.push_back(36)
  test.push_back(37)

  test.pop_front()

  assert.equal(
    format(test), 
    format({head: {data: 36, next: { data: 37, next: null}}, size: 2}), messageRed("Test 8 failed")
  )
}

function test9() {
  // pop_front 
  let test = new List()

  test.push_back(35)
  test.push_back(36)
  test.push_back(37)
  
  test.insert(34, 0) // like push_front
  assert.equal(
    format(test), 
    format({head: {data: 34, next: {data: 35, next: {data: 36, next: {data: 37, next: null}}}}, size: 4}), messageRed("Test 9 failed")
  )
}

function test10() {
  // insert in mid
  let test = new List()

  test.push_back(34)
  test.push_back(35)
  test.push_back(36)
  test.push_back(37)

  test.insert(35, 1)
  assert.equal(
    format(test), 
    format({head: {data: 34, next: {data: 35, next: {data: 35, next: {data: 36, next: {data: 37, next: null}}}}}, size: 5}), messageRed("Test 10 failed")
  )
}

function test11() {
  // insert in back
  let test = new List()

  test.push_back(34)
  test.push_back(35)
  test.push_back(36)
  test.push_back(37)

  test.insert(38,4)
  assert.equal(
    format(test), 
    format({head: {data: 34, next: {data: 35, next: {data: 36, next: {data: 37, next: {data: 38, next: null}}}}}, size: 5}), messageRed("Test 11 failed")
  )
}


function test12() {
  // removeAt
  let test = new List()

  test.push_back(34)
  test.push_back(35)
  test.push_back(36)
  test.push_back(37)

  test.removeAt(1)
  assert.equal(
    format(test), 
    format({head: {data: 34, next: {data: 36, next: {data: 37, next: null }}}, size: 3}), messageRed("Test 12 failed")
  )
}

function test13() {
  // removeAt
  let test = new List()

  test.push_front(1)
  test.removeAt(0)

  assert.equal(
    format(test), 
    format({head: null ,size: 0}), messageRed("Test 13 failed")
  )
}

function test14() {
  // removeAt
  let test = new List()

  test.push_back(34)
  test.push_back(35)

  test.removeAt(0)
  assert.equal(
    format(test), 
    format({head: {data: 35, next: null } ,size: 1}), messageRed("Test 14 failed")
  )
}

function test15() {
  // pop_back
  let test = new List()

  test.push_back(1)
  test.push_back(2)
  test.push_back(3)
  test.push_back(4)
  test.push_back(5)
  test.push_back(6)

  test.pop_back()
  assert.equal(
    format(test), 
    format({head: {data:1, next: {data:2, next: {data:3, next: {data:4, next:{ data:5, next:null }}}}},size:5}), messageRed("Test 15 failed")
  )
}

runTests()