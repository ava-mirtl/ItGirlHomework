class Cat{
    constructor(name, age, owner, email, breed, food, sex){
        this.name = name;
        this.age = age;
        this.owner = owner;
        this.email = email;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }}

    function createCat() {
        let catName = document.querySelector('#name').value;
        let catAge = document.querySelector('#age').value;
        let catOwner = document.querySelector('#owner').value;
        let catEmail = document.querySelector('#email').value;
        let catBreed = document.querySelector('#breed').value;
        let catFood = [];
        let catSex = document.querySelector('input[name="sex"]:checked').value;
        getCheckedCheckBoxes(catFood);

        let cat = new Cat (catName, catAge, catOwner, catEmail, catBreed, catFood, catSex);
        console.log(cat);}

        function getCheckedCheckBoxes(catFood) {
            let checkboxes = document.getElementsByName('meal');
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    catFood.push(checkboxes[i].value);
                }
            }
        };


const btn = document.querySelector('#ok');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    createCat();
})