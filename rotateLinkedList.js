var rotateLinkedList = function(head, k) {
  let pointer1 = head;
  let counter = 0;
  while (counter < k) {
    if (!pointer1) return null;
    pointer1 = pointer1.next;
    counter++;
  }
  let pointer2 = pointer1;
  while (pointer2.next) {
    pointer2 = pointer2.next;
  }
  pointer2.next = head;
  while(pointer2.next.val !== pointer1.val) {
    pointer2 = pointer2.next;
  }
  pointer2.next = null;
  return pointer1;
}


function LinkedList(element) {
  this.val = element;
  this.next = null;
}

let l1 = new LinkedList(1);
l1.next = new LinkedList(2);
l1.next.next = new LinkedList(3);
l1.next.next.next = new LinkedList(4);
l1.next.next.next.next = new LinkedList(5);
console.log(rotateLinkedList(l1, 2));