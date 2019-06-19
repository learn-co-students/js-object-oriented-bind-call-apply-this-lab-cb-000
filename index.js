//Your code here
function justInvoke(callback) {
  return callback()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(originalFunction, thisValue) {
  return originalFunction.bind(thisValue)
}