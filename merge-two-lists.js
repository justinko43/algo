/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val<= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;  
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};



function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

const l2 = new ListNode(0);
l2.next = new ListNode(5);
l2.next.next = new ListNode(7);

console.log(mergeTwoLists(l1,l2));