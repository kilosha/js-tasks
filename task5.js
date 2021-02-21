/*Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, 
кроме 4 цифр или 6 цифр.

Если функции передана правильная строка PIN, верните true, иначе верните false.*/

//две функции, первая не учитывает случаи, где в строке есть пробелы, вторая учитывает
let correctPIN = function (str) {
    let arr = str.split("").map(item=> +item);
    return (arr.length == 4 || arr.length == 6) && (!arr.includes(NaN));
    
}

console.log (correctPIN("12"));
console.log (correctPIN("1223"));
console.log (correctPIN("141232"));
console.log (correctPIN("12-1"));
console.log (correctPIN("1O2112"));
console.log (correctPIN("  2112"));

let correctPIN2 = function (str) {
    let arr = str.split("");
    if (arr.includes(" ")) {
        return false;
    } else {
        return (arr.length == 4 || arr.length == 6) && (!arr.map(item=> +item).includes(NaN));
    }
};

console.log (correctPIN2("13"));
console.log (correctPIN2("1143"));
console.log (correctPIN2("141353"));
console.log (correctPIN2("-154"));
console.log (correctPIN2("1O2112")); // тут не ноль, а буква О
console.log (correctPIN2("12 1"));
console.log (correctPIN2(" 02112"));