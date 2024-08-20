class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null) {
  if (head == null) return null;
  let node: ListNode | null = head;
  let p = head;
  let q: ListNode | null = null;
  let lastNode: ListNode | null = null;
  while (node) {
    q = node.next;
    if (node != p) {
      node.next = p;

      p = node;
    }
    if (!q) {
      lastNode = node;
    }
    node = q;
  }
  head.next = null;
  return lastNode;
}

function showList(head: ListNode | null) {
  if (head == null) return;
  let node: ListNode | null = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

showList(reverseList(head));
