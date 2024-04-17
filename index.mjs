import DoublyLinkedList from "./List/doubly_linked_list.mjs"
import SinglyLinkedList from "./List/singly_linked_list.mjs"
import Stack from "./List/stack.mjs"
import Queue from "./List/queue.mjs"
import { testsForList, testsForStack, testsForQueue } from "./List/tests.mjs"
import process from "node:process"


// [tests]
switch(process.argv[2]) {
  case "-h":
  case "--help":
    console.log(`Commands:
    To get this information, type: --help | -h
    Run tests for Single linked List: --singly-list | -sl
    Run tests for Doubly linked List: --doubly-list | -dl
    Run tests for Stack: --stack | -s
    Run tests for Queue: --queue | -q
    `
  )
    break
  case "--singly-list":
  case "-sl":
    testsForList(SinglyLinkedList)
    break
  case "--doubly-list":
  case "-dl":
    testsForList(DoublyLinkedList)
    break
  case "--stack":
  case "-s":
    testsForStack(Stack)
    break
  case "--queue":
  case "-q":
    testsForQueue(Queue)
    break
  default:
    console.log("Invalid flag for more info type to '--help' ")
}
