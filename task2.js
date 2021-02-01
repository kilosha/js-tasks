/*Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией - убрать все гласные из 
комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку 
со всеми удаленными гласными.
Например, строка «Этот сайт для неудачников LOL!» стал бы "Ths wbst s fr lsrs LL!"
у не считается гласным.*/

let vowels = ["a","A","e","E","i","I","o","O","u","U"];

let deleteVowels = function (string) {
    let arr = string.split("");
    for (let i =0; i<arr.length; i++) {
        if (vowels.includes(arr[i])){
            arr.splice(i,1);
            i--; 
        }
    }
    return arr.join("");
}

console.log(deleteVowels("hello world"));
console.log(deleteVowels("This website is for loosers LOL!"));
console.log(deleteVowels("Thiiiis EwEbsite is for loosers LOL!"));