/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
*/

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(0);
  let headTracker = dummyHead;
  let carry = 0;
  let a, b, c, val;

  while (l1 || l2) {
    a = (l1) ? l1.val : 0;
    b = (l2) ? l2.val : 0;
    c = a + b + carry;
    val = c % 10;
    carry = Math.floor(c / 10);

    headTracker.next = new ListNode(val);
    headTracker = headTracker.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry !== 0) headTracker.next = new ListNode(carry);
  return dummyHead.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
// l1.next.next.next = new ListNode(9);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// addTwoNumbers(l1,l2)
console.log(addTwoNumbers(l1,l2));
// console.log(Math.floor(16/10));