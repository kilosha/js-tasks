/*Преобразовать массив
Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает
 преобразованный массив на основе управляющих последовательностей, содержащихся в arr. 
 Управляющие последовательности - это определенные строковые элементы указанного массива:

--discard-next исключает следующий элемент массива из преобразованного массива.
--discard-prev исключает предыдущий элемент массива из преобразованного массива.
--double-next удваивает следующий элемент массива в преобразованном массиве.
--double-prev удваивает предыдущий элемент массива в преобразованном массиве.
Например:

transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]

transform ([1, 3, '--discard-prev', 4]) => [1, 4]
*/

let transform = function (arr) {
    let newArr = [];

    arr.forEach((item,index) => {
    switch (item) {
        case "--discard-next":
            arr.splice(index+1,1);
            break;
        case "--discard-prev":
            newArr.pop();
            break;
        case "--double-next":
           newArr.push(arr[index+1]);
           break;
        case "--double-prev":
            newArr.push(arr[index-1]);
            break;
        default: 
            newArr.push(item);
    }});
    return newArr;
}

console.log(transform([1, 3, '--double-next', 4]));
console.log(transform ([1, 3, '--discard-prev', 4]));
console.log(transform([1, 3, '--double-prev', 4]));
console.log(transform([1, 3, '--discard-next',4]));