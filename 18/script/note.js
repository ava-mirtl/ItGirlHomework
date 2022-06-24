const add = document.querySelector("#add");
add.addEventListener("click", (e)=>{
    const container = document.querySelector(".container");
    e.preventDefault();
    let arr =[];
    arr.push (`<div class="card"><p><input type="date" class="date">
    </p><p><input type="text" class="txt" placeholder="Текст"></p><button class="save">Добавить</button>
    <button class="clear">Очистить</button></div>`);
    container.innerHTML += arr;
    add.classList.add('none');


saveNote();
clearNotepad();})



function saveNote(){
const save = document.querySelector('.save');
save.addEventListener('click', ()=>{
    let date = document.querySelector('.date'),
    txt = document.querySelector('.txt');

if (txt.value != "" & date.value != "" ) {
    savedNote = localStorage.setItem(date.value, txt.value);
    let newArr =[];
    let keys = Object.keys(localStorage);
    newArr.sort();
    console.log(keys);

for (let key of keys) {
    let str = localStorage.getItem(key);
    newArr.push(`<p class="date">${key}</p><p class="txt">${str}</p>`);}
    
    newArr.forEach(item => {
        const div = document.querySelector('.div');
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = item;
        div.append(card)
    })
}

else {
    alert ("Заметка пустая");
    return;
};})}



function clearNotepad() {
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector('.date').value = "";
        document.querySelector('.txt').value = "";
  })}


