const autos = []; 
const auto = document.querySelector('#auto').value
const btn = document.querySelector('#submit')
let count = 0;
const autocat = document.querySelector('#auto')

switch (auto) {
    case "mini": autos[0] = +25000;
        break;
    case "merc": autos[0] = +5000;
        break;
    case "bmw": autos[0] = +30000;
        break;
    case "audi": autos[0] = +40000;
        break;
}

btn.addEventListener('click',()=>{
    const rad = document.querySelectorAll('.line');
    rad.forEach((item,index)=>{
         if(item.checked){
            autos[1]= +item.value   
         }
         summChecks(); 
    })  
    console.log(autos);
    sum(autos);
    showSum();
    count = 0;
});

function summChecks(){
    let checks = document.querySelectorAll('input.checkbox:checked');
    let checkedValues = Array.from(checks).map(cb => +cb.value);
    console.log(checkedValues);
    let countb = 0;
    checkedValues.forEach((item,i)=>{
        countb += item ;
        return countb;
        })
        autos[2] = countb;
}

function sum(a){
    a.forEach((item,i)=>{
    count += item ;
    })
    console.log (count)
}

function showSum() {
    const price = document.querySelector('#price')
    price.value = count + ' мурлей';
}

