/*В этом небольшом задании вам дана строка чисел, разделенных пробелами, 
и вы должны вернуть самое высокое и самое низкое число.

list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"
*/

let str = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6";

let str2 = "-1 20 12 13321 40 -2140 -123";

let str3 = "1 2 3 4 1818";

let list = function (string) {
    let mass = string.split(" ").sort((a,b)=>b-a);
    mass.splice(1,mass.length-2);
    console.log(mass.join(" "));
}

list(str);
list(str2);
list(str3);