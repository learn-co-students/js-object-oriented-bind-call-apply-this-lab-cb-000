let returnsThisAndArgs;
let bob;
returnsThisAndArgs = function(){ return {thisValue: this, arguments: Array.from(arguments)} }
bob = {name: 'bob'}
age = 18

function setThisWithCall(fn, thisValue, arg){
  thisValue = fn.call(thisValue, arg);
  return thisValue;
}
