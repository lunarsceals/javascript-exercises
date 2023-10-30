const repeatString = function(text, num) {
    if (num < 0){
        return "ERROR";
    } else {
        let repeatedString = text.repeat(num);
        return repeatedString;
    }

};

// Do not edit below this line
module.exports = repeatString;
