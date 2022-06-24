// 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.
let arr = ['js', 'css', 'html'];
alert(arr[0]);
// Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как false, undefined, пустые строки, ноль, null с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.
let arr2 = [0, 1, false, 2, undefined, '', 3, null];
const result = arr2.filter(num => +num);
alert (result);
//Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`.*/
let arr3 =[[1,2], [1,2,3], [1,2,3,4]];
const index = arr3.findIndex((element, i) => {
  if (element.length > 3){
  return true
    }});
    alert (index);
    