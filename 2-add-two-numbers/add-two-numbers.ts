/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Add corresponding nodes together and if over 10 carry and add 1 to the next one

    let result = new ListNode();
    const final = result;

    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 !== null ? l1.val : 0;
        const val2 = l2 !== null ? l2.val : 0;

        let current = val1 + val2 + carry;
        if (current >= 10) {
            current -= 10;
            result.val = current;
            carry = 1;
        } else {
            result.val = current;
            carry = 0;
        }
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }

        if (l1 !== null || l2 !== null || carry !== 0) {
            result.next = new ListNode();
            result = result.next;
        }
    }
    return final;
};