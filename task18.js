/*Написать функцию которая проверит является ли строка палиндромом (гугли что это такое)*/


let isPalindrome = function (string) {
    return string===string.split("").reverse().join("");
}

console.log(isPalindrome("hello world"));
console.log(isPalindrome("sosipisos"));
console.log(isPalindrome("anna"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("fa33ad21"));
