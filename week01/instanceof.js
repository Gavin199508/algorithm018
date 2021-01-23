function instance(left, right) {
  left = left.__proto__
  right = right.prototype
  while (true) {
    if (left == null)
      return false;
    if (left === right)
      return true;
    left = left.__proto__
  }
}
console.log([] instanceof Array)
console.log(instance([], Array))

Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}