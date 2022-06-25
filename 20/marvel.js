let ironman, captain, blackwidow, deadpool, spiderman, tor, halk
fetch('https://raw.githubusercontent.com/ava-mirtl/ItGirlHomework/main/20/marvel.json')
.then((response => response.json()))
.then(hero => {ironman = hero[0]; captain = hero[1]; spiderman = hero[2]; halk = hero[3]; tor = hero[4]; blackwidow = hero[5]; deadpool = hero[6]})
.catch(err => console.log(err));

let heroCollection = document.querySelectorAll('.card__content')
console.log(heroCollection);
heroCollection.forEach((element) => {element.addEventListener('click', ()=>{
    element.classList.add('white');
    if (element==document.querySelector('.ironman'))
    {
        element.innerHTML=`<p class="card__hero-name">${ironman.name}</p>` + `<p>${ironman.ego}</p>` + `<p>${ironman.way}</p>` + `<p>${ironman.ability}</p>` + `<p>${ironman.description}</p>`}
    else if(element==document.querySelector('.captain'))  {
        element.innerHTML=`<p class="card__hero-name">${captain.name}</p>` + `<p>${captain.ego}</p>` + `<p>${captain.way}</p>` + `<p>${captain.ability}</p>` + `<p>${captain.description}</p>`}
    else if(element==document.querySelector('.spiderman'))  {
        element.innerHTML=`<p class="card__hero-name">${spiderman.name}</p>` + `<p>${spiderman.ego}</p>` + `<p>${spiderman.way}</p>` + `<p>${spiderman.ability}</p>` + `<p>${spiderman.description}</p>`}
    else if(element==document.querySelector('.halk'))  {
        element.innerHTML=`<p class="card__hero-name">${halk.name}</p>` + `<p>${halk.ego}</p>` + `<p>${halk.way}</p>` + `<p>${halk.ability}</p>` + `<p>${halk.description}</p>`}
    else if(element==document.querySelector('.tor'))  {
        element.innerHTML=`<p class="card__hero-name">${tor.name}</p>` + `<p>${tor.ego}</p>` + `<p>${tor.way}</p>` + `<p>${tor.ability}</p>` + `<p>${tor.description}</p>`}
    else if(element==document.querySelector('.blackwidow'))  {
        element.innerHTML=`<p class="card__hero-name">${blackwidow.name}</p>` + `<p>${blackwidow.ego}</p>` + `<p>${blackwidow.way}</p>` + `<p>${blackwidow.ability}</p>` + `<p>${blackwidow.description}</p>`}
    else if(element==document.querySelector('.deadpool'))  {
            element.innerHTML=`<p class="card__hero-name">${deadpool.name}</p>` + `<p>${deadpool.ego}</p>` + `<p>${deadpool.way}</p>` + `<p>${deadpool.ability}</p>` + `<p>${deadpool.description}</p>`}
                                            
})})
heroCollection.forEach((element) => {element.addEventListener('mouseleave', ()=>{
    element.classList.remove('white');
    element.innerHTML=""
})})

// let rating = document.querySelectorAll('.ratingdeadpool');
// rating.forEach((star)=> {star.addEventListener('click',()=>{
//     localStorage.setItem('ratingdeadpool', `${star.value}`);
// }) })   