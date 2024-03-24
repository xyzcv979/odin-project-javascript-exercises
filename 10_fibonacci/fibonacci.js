const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    }
    // 0 or 1
    if (num <= 1) {
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2);
};

// Do not edit below this line
module.exports = fibonacci;
