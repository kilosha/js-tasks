/*Напишите функцию removeDuplicate(str), которая возвращает строку, 
очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

let str = "вишня, груша, слива, груша";

function removeDuplicate(str) {};

removeDuplicate(str)
*/


//1 вариант
let removeDuplicate = function (str) {
    let arr = str.split(",");
    let mass = [];
    arr.forEach(item => {
        if (!mass.includes(item)) {
            mass.push(item);
        } 
    });

    return mass.join(",");
}


//2 вариант
let removeDuplicates = str => Array.from(new Set (str.split(","))).join(",");

let str = "вишня,вишня,груша,слива,груша";

console.log(removeDuplicate(str));
console.log(removeDuplicates(str));