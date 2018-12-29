//Your code here
const justInvoke = (cb) => {
    return cb();
};

const setThisWithCall = (fn, thisValue, arg) => {
    return fn.call(thisValue, arg);
};

const setThisWithApply = (fn, thisValue, args) => {
    return fn.apply(thisValue, args);
};

const returnNewFunctionOf = (functionToBeCopied, thisValue) => {
    return functionToBeCopied.bind(thisValue);
};