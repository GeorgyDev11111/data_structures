import DoublyLinkedList from "./List/doubly_linked_list.mjs"
import SinglyLinkedList from "./List/singly_linked_list.mjs"
import { testsForList } from "./List/tests.mjs"
import process from "node:process"


// [tests]
switch(process.argv[2]) {
  case "-h":
  case "--help":
    console.log("Commands:\n\tRun tests for Single linked List: --singly-list as -sl\n\tRun tests for Doubly linked List: --doubly-list as -dl")
    break
  case "--singly-list":
  case "-sl":
    testsForList(SinglyLinkedList)
    break
  case "--doubly-list":
  case "-dl":
    testsForList(DoublyLinkedList)
    break
  default:
    console.log("Invalid flag")
}
