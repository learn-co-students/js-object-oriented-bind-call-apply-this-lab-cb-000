// calls and returns the function as a callback, that shows that this is global from the callback
// The function simply invokes the function passed through to it. It also returns the return value of the passed through function.
function justInvoke(fn) {
  return fn();
}

// calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function
// The function again invokes the function passed to it, but uses the call method to return the function's this value.
// (Make sure to correctly pass the third argument!)
function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

// calls and returns the function as a callback, and assigns this to be bob while passing all arguments to the invoked function
// calls and returns the function as a callback, assigns this to be bob, and sets the array as arguments
// Again, invoke the function passed to it, change the this value of that function passed to it.
// In addition, invoke the passed function with arguments, using apply.
function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

// returns a new function
// sets the 'this' argument to fred
// Write a function that returns a copy of the function passed through, but sets the this value of the function's copy.
function returnNewFunctionOf(fn, thisValue) {
  let newFn = fn.bind(thisValue);
  return newFn;
}
