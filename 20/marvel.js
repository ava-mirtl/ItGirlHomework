let ironman, captain, blackwidow, deadpool, spiderman, tor, halk
fetch('https://raw.githubusercontent.com/ava-mirtl/ItGirlHomework/main/20/marvel.json')
.then((response => response.json()))
.then(hero => {ironman = hero[0]; captain = hero[1]; spiderman = hero[2]; halk = hero[3]; tor = hero[4]; blackwidow = hero[5]; deadpool = hero[6]})
.catch(err => console.log(err));

setTimeout(() => {
    console.log(ironman, captain, blackwidow, deadpool, spiderman, tor, halk);
}, 5000);
