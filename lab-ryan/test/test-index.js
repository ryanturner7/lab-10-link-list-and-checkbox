'use strict';

const expect = require('expect');
const SLL = require('../lib/SLL.js');

describe('testing linked list constructor and appendNode', () => {
  it('should return a new child node appended to the end', (done) => {
    let testHead = new SLL(0);
    let testNode = new SLL(1);
    testHead.appendNode(testNode);
    expect(testHead.next).toExist();
    expect(testHead.next.value).toEqual(1);
    done();
  });
  it('should return a linked list of three nodes', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    expect(testHead.next.next).toExist();
    expect(testHead.next.next.value).toEqual(2);
    done();
  });
});
describe('forEach method', () => {
  it('should return a mutated linked list', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.forEach((node) => {
      node.value = node.value*2;
    });
    expect(testHead.value).toEqual(0);
    expect(testHead.next.value).toEqual(2);
    expect(testHead.next.next.value).toEqual(4);
    done();
  });
});

describe('fromMiddle method', () => {
  it('should return the middle node', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    let testNode3 = new SLL(3);
    let testNode4 = new SLL(4);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.appendNode(testNode3);
    testHead.appendNode(testNode4);
    let middle = testHead.fromMiddle(testHead);
    expect(middle.value).toEqual(2);
    done();
  });
});

describe('removeNode', () => {
  it('should remove the first node with specified value', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.removeNode(2);
    expect(testHead.next.next).toEqual(null);
    done();
  });
  it('should remove the first node with specified value', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    let testNode3 = new SLL(3);
    let testNode4 = new SLL(4);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.appendNode(testNode2);
    testHead.appendNode(testNode3);
    testHead.appendNode(testNode4);
    testHead.removeNode(2);
    expect(testHead.next.next.value).toEqual(3);
    done();
  });
  it('should remove multiple nodes', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    let testNode3 = new SLL(3);
    let testNode4 = new SLL(4);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.appendNode(testNode3);
    testHead.appendNode(testNode4);
    testHead.removeNode(2);
    testHead.removeNode(3);
    expect(testHead.next.next.value).toEqual(4);
    done();
  });
});
describe('reverse', () => {
  it('should reverse the order of the nodes', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    testHead.appendNode(testNode1);
    testHead.reverse();
    expect(testNode1.next.value).toEqual(0);
    expect(testHead.next).toEqual(null);
    done();
  });
  it('should reverse the order of the nodes', (done) => {
    let testHead = new SLL(0);
    let testNode1 = new SLL(1);
    let testNode2 = new SLL(2);
    let testNode3 = new SLL(3);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.appendNode(testNode3);
    testHead.reverse();
    expect(testNode3.next.value).toEqual(2);
    expect(testHead.next).toEqual(null);
    done();
  });
});
