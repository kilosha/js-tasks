/*Напишите функцию removeDuplicate(str), которая возвращает строку, 
очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

let str = "вишня, груша, слива, груша";

function removeDuplicate(str) {};

removeDuplicate(str)
*/


let removeDuplicate = function (str) {
    let arr = str.split(",");
    let mass = [];
    for (let i=0; i < arr.length; i++) {
        if (!mass.includes(arr[i])) {
            mass.push(arr[i]);
        } 
    }
    return mass.join(",");
}

let str = "вишня,вишня,груша,слива,груша";

console.log(removeDuplicate(str));