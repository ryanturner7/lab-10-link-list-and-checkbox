'use strict';

module.exports = class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    if(!(node instanceof SLL)){
      return null;
    }
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }
  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle(){
    let slow = this;
    let fast = this;
    while(fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  removeNode(value){
    let current = this;
    while(current.next.value !== value){
      current = current.next;
    }
    current.next = current.next.next;
  }

  reverse(){
    let current = this;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }

    return previous;

  }

  findNthNode(n){
    let current = this;
    for(let i=0; i<n; i++){
      current = current.next;
    }
    return current;
  }
};
