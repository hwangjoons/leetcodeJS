var MyStack = function() {
  this.inQueue = [];
  this.outQueue = [];
};


MyStack.prototype.push = function(x) {
  this.inQueue.push(x);
};

MyStack.prototype.pop = function() {
  while(this.inQueue.length > 1){
      this.outQueue.push(this.inQueue.shift());
  }

  const lastItem = this.inQueue.shift();

  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};


MyStack.prototype.top = function() {
  while(this.inQueue.length > 1){
      this.outQueue.push(this.inQueue.shift());
  }
  // peak
  const lastItem = this.inQueue[0];

  this.outQueue.push(this.inQueue.shift());
  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};

MyStack.prototype.empty = function() {
  return this.inQueue.length === 0;
};
