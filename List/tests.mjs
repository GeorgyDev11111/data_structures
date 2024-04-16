// tests for "singly linked list" and "doubly linked list"
import assert from "node:assert"

function messageRed(text) {
  return `\x1b[31m${text}\x1b[0m`
}

function test1(List) {
  // pop_front
  const list = new List()

  assert.equal(list.pop_front(), undefined, messageRed("Test 1-1 failed") )

  list.push_back(1)
  list.push_front(2)
  list.pop_front()

  assert.equal(list.getSize(), 1, messageRed("Test 1-2 failed"))
}

function test2(List) {
  // push_back
  const list = new List()
  list.push_back(1)

  assert.equal(list.getSize(), 1, messageRed("Test 2-1 failed"))
  assert.equal(list.get(0), 1, messageRed("Test 2-2 failed"))
}

function test3(List) {
  // clear
  const list = new List()
  list.push_back(1)
  list.clear()
  assert.equal(list.getSize(), 0, messageRed("Test 3 failed"))
}

function test4(List) {
  // getSize
  const list = new List()
  list.push_back(1)
  list.push_back(2)
  list.push_back(3)

  assert.equal(list.getSize(), 3, messageRed("Test 4 failed"))
}

function test5(List) {
  // get
  const list = new List()
  list.push_back(1)
  list.push_back(2)

  assert.equal(list.get(-1), undefined, messageRed("Test 5-1 failed"))
  assert.equal(list.get(1), 2, messageRed("Test 5-2 failed"))
  assert.equal(list.get(2), undefined, messageRed("Test 5-3 failed"))
}

function test6(List) {
  // push_front
  const list = new List()
  list.push_back(1)
  list.push_front(2)

  assert.equal(list.getSize(), 2, messageRed("Test 6-1 failed"))
  assert.equal(list.get(0), 2, messageRed("Test 6-2 failed"))
  assert.equal(list.get(1), 1, messageRed("Test 6-3 failed"))
}

function test7(List) {
  // insert
  const list = new List()
  list.push_back(1)
  list.push_back(3)
  list.insert(2, 1)

  assert.equal(list.get(1), 2, messageRed("Test 7-1 failed"))
  assert.equal(list.getSize(), 3, messageRed("Test 7-2 failed"))
  assert.equal(list.insert(2,100), undefined, messageRed("Test 7-3 failed"))
}

function test8(List) {
  // removeAt
  const list = new List()
  list.push_back(1)
  list.push_back(2)
  list.removeAt(1)

  assert.equal(list.getSize(), 1, messageRed("Test 8-1 failed"))
  assert.equal(list.removeAt(100), undefined, messageRed("Test 8-2 failed"))
}

function test9(List) {
  // pop_back
  const list = new List()

  assert.equal(list.pop_back(), undefined, messageRed("Test 9-1 failed"))

  list.push_back(1)
  list.push_back(2)
  list.pop_back()

  assert.equal(list.getSize(), 1, messageRed("Test 9-2 failed"))
}

// runs all tests
function testsForList(List) {
  test1(List)
  test2(List)
  test3(List)
  test4(List)
  test5(List)
  test6(List)
  test7(List)
  test8(List)
  test9(List)
  console.log("Success!")
}

export { testsForList }