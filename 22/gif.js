let btn = document.querySelector('#searchbtn');
let result = document.querySelector('#responce');
let array = [];



btn.addEventListener('click', (e)=>{
  result.innerHTML="";
array = [];
    e.preventDefault();   
    async function fetchToDo () {
      let input = document.querySelector('.search'),
      n=input.value
      const url = `https://api.giphy.com/v1/gifs/search?api_key=EwOmWGb4UqWf79KsjbfzikWI8KBiO7WS&limit=5&offset=0&q=${n}`;  
      const responce = await fetch(url)
      try {
      data = await responce.json()
      input.value = ''
      if(responce.status != 200){
        throw new Error("Сервер не доступен")
      }
      return data
      } catch (e) {
        alert('Ошибка: ' + e.message)
        console.log(e.message);
      }
    }
    async function getImg(){
      const data = await fetchToDo()
      try {
        array = data.data
        if (array = []) {
          throw new Error("Некорректный запрос")
        }
      array.forEach(el => {
        result.innerHTML+= `<img src="${el.images.downsized.url}" alt = "">`;
      });
      } catch (error) {
        alert('Ошибка: Некорректный запрос')
      }
      
   }

getImg()})
