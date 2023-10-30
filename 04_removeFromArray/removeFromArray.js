const removeFromArray = function(arr, ...elem) {
    const newArray = arr.filter(function(x){
        return elem.indexOf(x) < 0;
    });
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
