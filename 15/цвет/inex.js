
const page = document.querySelector('.cont')

function changeColor(){

    switch(document.querySelector('#color').value){
        case "red": page.classList.add("red"); page.classList.remove("black"); page.classList.remove("sweet"); break;
        case "black": page.classList.add("black"); page.classList.remove("sweet"); break;
        case "sweet": page.classList.add("sweet"); page.classList.remove("black"); break;
    }
}
