let ironman, captain, blackwidow, deadpool, spiderman, tor, halk
fetch('https://raw.githubusercontent.com/ava-mirtl/ItGirlHomework/main/20/marvel.json')
.then((response => response.json()))
.then(hero => {ironman = hero[0]; captain = hero[1]; spiderman = hero[2]; halk = hero[3]; tor = hero[4]; blackwidow = hero[5]; deadpool = hero[6]})
.catch(err => console.log(err));

let heroCollection = document.querySelectorAll('.card__content')
console.log(heroCollection);
heroCollection.forEach((element) => {element.addEventListener('click', ()=>{
    element.classList.add('white');
    let a;
    if (element==document.querySelector('.ironman'))
    {
        element.innerHTML=`<p class="card__hero-name">${ironman.name}</p>` + `<p>${ironman.ego}</p>` + `<p>${ironman.way}</p>` + `<p>${ironman.ability}</p>` + `<p>${ironman.description}</p>`+
    `<form class="rating-area" id="rating">
    <input type="radio" class="rating" id="star-5" name="rating" value="5">
    <label for="star-5" title="Оценка «5»"></label>
    <input type="radio" class="rating" id="star-4" name="rating" value="4">
    <label for="star-4" title="Оценка «4»"></label>
    <input type="radio" class="rating" id="star-3" name="rating" value="3">
    <label for="star-3" title="Оценка «3»"></label>
    <input type="radio" class="rating" id="star-2" name="rating" value="2">
    <label for="star-2" title="Оценка «2»"></label>
    <input type="radio" class="rating" id="star-1" name="rating" value="1">
    <label for="star-1" title="Оценка «1»"></label>
</form>`;
a=`ironman`;
}
    else if(element==document.querySelector('.captain'))  {
        element.innerHTML=`<p class="card__hero-name">${captain.name}</p>` + `<p>${captain.ego}</p>` + `<p>${captain.way}</p>` + `<p>${captain.ability}</p>` + `<p>${captain.description}</p>`+`<form class="rating-area" id="rating">
        <input type="radio" class="rating" id="star-5" name="rating" value="5">
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" class="rating" id="star-4" name="rating" value="4">
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" class="rating" id="star-3" name="rating" value="3">
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" class="rating" id="star-2" name="rating" value="2">
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" class="rating" id="star-1" name="rating" value="1">
        <label for="star-1" title="Оценка «1»"></label>
    </form>`;
    a=`captain america`;
    }
    else if(element==document.querySelector('.spiderman'))  {
        element.innerHTML=`<p class="card__hero-name">${spiderman.name}</p>` + `<p>${spiderman.ego}</p>` + `<p>${spiderman.way}</p>` + `<p>${spiderman.ability}</p>` + `<p>${spiderman.description}</p>`+`<form class="rating-area" id="rating">
        <input type="radio" class="rating" id="star-5" name="rating" value="5">
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" class="rating" id="star-4" name="rating" value="4">
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" class="rating" id="star-3" name="rating" value="3">
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" class="rating" id="star-2" name="rating" value="2">
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" class="rating" id="star-1" name="rating" value="1">
        <label for="star-1" title="Оценка «1»"></label>
    </form>`;
    a=`spiderman`;
}
    else if(element==document.querySelector('.halk'))  {
        element.innerHTML=`<p class="card__hero-name">${halk.name}</p>` + `<p>${halk.ego}</p>` + `<p>${halk.way}</p>` + `<p>${halk.ability}</p>` + `<p>${halk.description}</p>`+`<form class="rating-area" id="rating">
        <input type="radio" class="rating" id="star-5" name="rating" value="5">
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" class="rating" id="star-4" name="rating" value="4">
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" class="rating" id="star-3" name="rating" value="3">
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" class="rating" id="star-2" name="rating" value="2">
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" class="rating" id="star-1" name="rating" value="1">
        <label for="star-1" title="Оценка «1»"></label>
    </form>`;
    a=`halk`;
    }
    else if(element==document.querySelector('.tor'))  {
        element.innerHTML=`<p class="card__hero-name">${tor.name}</p>` + `<p>${tor.ego}</p>` + `<p>${tor.way}</p>` + `<p>${tor.ability}</p>` + `<p>${tor.description}</p>`+`<form class="rating-area" id="rating">
        <input type="radio" class="rating" id="star-5" name="rating" value="5">
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" class="rating" id="star-4" name="rating" value="4">
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" class="rating" id="star-3" name="rating" value="3">
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" class="rating" id="star-2" name="rating" value="2">
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" class="rating" id="star-1" name="rating" value="1">
        <label for="star-1" title="Оценка «1»"></label>
    </form>`;
    a=`tor`;
    }
    else if(element==document.querySelector('.blackwidow'))  {
        element.innerHTML=`<p class="card__hero-name">${blackwidow.name}</p>` + `<p>${blackwidow.ego}</p>` + `<p>${blackwidow.way}</p>` + `<p>${blackwidow.ability}</p>` + `<p>${blackwidow.description}</p>`+`<form class="rating-area" id="rating">
        <input type="radio" class="rating" id="star-5" name="rating" value="5">
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" class="rating" id="star-4" name="rating" value="4">
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" class="rating" id="star-3" name="rating" value="3">
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" class="rating" id="star-2" name="rating" value="2">
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" class="rating" id="star-1" name="rating" value="1">
        <label for="star-1" title="Оценка «1»"></label>
    </form>`;
    a=`blackwidow`;
   }
    else if(element==document.querySelector('.deadpool'))  {
            element.innerHTML=`<p class="card__hero-name">${deadpool.name}</p>` + `<p>${deadpool.ego}</p>` + `<p>${deadpool.way}</p>` + `<p>${deadpool.ability}</p>` + `<p>${deadpool.description}</p>`+`<form class="rating-area" id="rating">
            <input type="radio" class="rating" id="star-5" name="rating" value="5">
            <label for="star-5" title="Оценка «5»"></label>
            <input type="radio" class="rating" id="star-4" name="rating" value="4">
            <label for="star-4" title="Оценка «4»"></label>
            <input type="radio" class="rating" id="star-3" name="rating" value="3">
            <label for="star-3" title="Оценка «3»"></label>
            <input type="radio" class="rating" id="star-2" name="rating" value="2">
            <label for="star-2" title="Оценка «2»"></label>
            <input type="radio" class="rating" id="star-1" name="rating" value="1">
            <label for="star-1" title="Оценка «1»"></label>
        </form>`;
        a=`deadpool`;
        
    }
        let rating = document.querySelectorAll('.rating-area')
        rating.forEach((element) => {element.addEventListener('click', (event)=>{
            let target = event.target;
            console.log(target);
            localStorage.setItem(`${a}`, `${target.title}`);})})                                  
})})
heroCollection.forEach((element) => {element.addEventListener('mouseleave', ()=>{
    element.classList.remove('white');
    element.innerHTML=""
})})

