/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1); let pre = dummy;
  while (l1 && l2) {
      if (l1.val > l2.val) {
          pre.next = l2;
          l2 = l2.next;
          pre = pre.next;
      } else {
          pre.next = l1;
          l1 = l1.next;   
          pre = pre.next
      }
  }
  if (l1) {
      pre.next = l1;
  } else {
      pre.next = l2;
  }
  return dummy.next;
};