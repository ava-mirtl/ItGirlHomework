let btn = document.querySelector('#searchbtn');
let result = document.querySelector('#responce');
let src;
let arr = [];




btn.addEventListener('click', (e)=>{
    e.preventDefault();   
    async function fetchToDo () {
      let input = document.querySelector('.search'),
      n=input.value
      const url = `https://api.giphy.com/v1/gifs/search?api_key=EwOmWGb4UqWf79KsjbfzikWI8KBiO7WS&limit=5&offset=0&q=${n}`;  
      const responce = await fetch(url, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .catch(error => console.log(error))
      data = await responce.json()
      input.value = ''
      return data
    }
    async function getImg(){
      const data = await fetchToDo()
      array = data.data
      array.forEach(el => {
        arr.push(el.images.downsized.url)
      });
   }

async function viewImg() {
 await  getImg()
 console.log(arr); 

 arr.forEach(el =>{
  let box = document.createElement("img");
  box.src = el;
  result.append(box);
})}

viewImg()})
