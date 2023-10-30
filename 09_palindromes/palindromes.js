const palindromes = function (string) {
    let p2 = string.length 
    let truthValues = []
    for (let p1 = 0; p1<p2; p1++){
        if (string[p1] == string[p2]){
            truthValues.push(true);
            p2--;
        }
    return truthValues.every();
    }
};

// Do not edit below this line
module.exports = palindromes;
