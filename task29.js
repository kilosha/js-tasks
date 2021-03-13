/* Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней 
только уникальные символы, т.е. встречающиеся в строке один раз.

function unique_letters(str) {};

unique_letters('anaconda')*/


let unique_letters = str => Array.from(new Set(str.split(""))).join("");

console.log(unique_letters("anaconda"));
