
// сделать фон красным
//1) document.body.style.vackground = 'red'
//2) document.getElementById( "id элемента") - поиск элемента по id
//3) document.querySelector("body") - поиск gthdjuj ищвн dyenhb html
//4) document.querySelector("#body") - поиск первого body по id внутри html
//5) document.querySelector (".body") - поиск первого body по class внутри html 
//innerHTML // возращает контент    //"<hi>Hello, world!</hi>"
//body.innerHTML = "<hi>Hello, world!</hi>"    //небезопасно (xxs - уязвимость)
//textCOntent = "" // возращает текстовое содержимое
//addEventListener("событие",  "функция") // 
//setAttribute ("Тип атрибута название")
//removeAttribute (тип атрибута) //удаление атрибута

//ПРИМЕР ПО СОЗДАНИЮ ОБРАБОЧИКА СОБЫТИЙ click
//const clicker = () => {
  //  const div = document.querySelector("div")
  //  div.textContent = "Hello,world"
//}
 
//document.querySelector("button").addEventListener("click", clicker)
//clicker


//document.getElementById("body").style.background = "red"
//body.style.background = "red"
//body.style.color = "white"


//const clicker = () => {
//const div = document.querySelector("div")
//div.textContent = "Hello, world"  //безопасно
//}
//clicker
//document.querySelector("button").addEventListener("click", clicker)

//наход дочерного дива
//const firstDiv = document.querySelector("div:nth-child(2)")
//firstDiv.textContent = "hello"



// работа с атрибутами class элементов
// элемент.classlist.add/remove/toggle("название класса")
//togle ("название") - добавляет класс,енсли отсуствует у элемента
// или удаляет класс , если он уже имеется 

//const clicker = () => {
//const firstDiv = document.querySelector("div")
//firstDiv.classList.toggle("black")
//}



//document.createElement



//const firstDiv = document.querySelector("div")

//const p = document.createElement("p")





const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.classList.toggle("cell-active");
    });
});