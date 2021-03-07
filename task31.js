/* Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
let str = "Сила тяжести приложена к центру масс тела";
function cutString(str, n) {};
cutString(str, 5)
*/


let cutString = (str,n) => str
    .split(" ")
    .slice(0,n);

let str = "Сила тяжести приложена к центру масс тела";

console.log(cutString(str,5));