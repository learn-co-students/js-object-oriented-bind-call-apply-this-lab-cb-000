function justInvoke(fn) {
  return fn.apply();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return function newFunction() {
    return functionToBeCopied.call(thisValue);
  };
}
