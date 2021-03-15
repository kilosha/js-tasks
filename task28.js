/*Напишите функцию removeDuplicate(str), которая возвращает строку, 
очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

let str = "вишня, груша, слива, груша";

function removeDuplicate(str) {};

removeDuplicate(str)
*/


//1 вариант
let removeDuplicatesWithForEach = function (str) {
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
let removeDuplicatesWithFilterAndIncludes = str => str.split(",").filter((item,index, array) => !array.includes(item, index+1)).join(","); // берёт последнее повторение

//3 вариант
let removeDuplicatesWithFilterAndLastIndexOf = str => str.split(",").filter((item,index, array) => array.indexOf(item)==index).join(",");

//4 вариант
let removeDuplicatesWithSet = str => Array.from(new Set (str.split(","))).join(",");

let str = "вишня,вишня,груша,слива,груша";

console.log(removeDuplicatesWithForEach(str));
console.log(removeDuplicatesWithFilterAndIncludes(str));
console.log(removeDuplicatesWithSet(str));
console.log(removeDuplicatesWithFilterAndLastIndexOf(str));

