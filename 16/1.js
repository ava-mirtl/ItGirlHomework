
let arr = [],
count = 0,
num;
function sumInput(){
do{
num= prompt('Введите число', '');
if(num === '' || num === null || isNaN(num)) break;
arr.push(+num);
}while(true);
console.log(arr.sort((a, e) => a - e));
}

function sum(a){
    a.forEach((item,i)=>{
    count += item ;
    })
    console.log (count)
    return count; 
}
    sumInput();
    sum(arr);
