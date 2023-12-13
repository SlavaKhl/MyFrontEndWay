// определение переменных...

const dogSelector    = document.getElementById('dogSelector');
const dogImgSelector = document.getElementById('dogImg');

console.log(dogSelector);

// определение логики и функций приложения...

// функция вывода картинки породы собаки...
let renderDogImg = (data) => {
    dogImgSelector.innerHTML = `<img src=${data.message}>`
}

// функция вывода картинок всех пород собак...
let renderAllDogImg = (data) => {
    Object.keys(data.message).forEach((element, key) => {
        dogSelector.innerHTML += `<option value="${element}">${element}</option>`
        console.log(element);
        } 
    ) 
}
    
// функция запроса и получения картинок на сервер...
let getDogImg = () => {
    fetch(`https://dog.ceo/api/breed/${dogSelector.value}/images/random`)
    .then(response => response.json())
    .then(data => renderDogImg(data))
    .catch(error => alert(error))
}

// функция запроса и получения всего списка пород собак ... 
let getAllDogs = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => renderAllDogImg(data))
    .catch(error => alert(error))

}

// функция прослушивания события на изменение породы собак...
dogSelector.addEventListener('change', getDogImg);

getAllDogs();
// getDogImg();



// Скопировать материалы в свою репозиторию

// Создадим приложение которое выведит фотографию породы собак
// Пример приложения можно рассмотреть в видео ./DogApiDemo.mp4

// 1) отрендерить список всех парод собак список доступен в data.js
// для этого неблоходимо пройти циклом через все данные и в сущестующий select 
// добавить новую опцию <option value=${breed.value}>${breed.name}

// 2) добавить на селект .addEventListener('change')
// и вызвать функцию котороя сделает запрос на сервер 

// 3) создать запрос на сервер 
// мы будем использовать https://dog.ceo/dog-api/
// наш запрос для получения картинки будет вышледить вот так
// https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
// где ${dogSelector.value} это опция которую мы выбрали

// 4) обработать запрос и отобразить картинку 
// использовать innerHTML и подставить 
// = `<img src='${data.message}'/>`
// где ${data.message} будет ссылочка на картинку 

// 5) добавить стилей по желанию




// Пример ответа от сервера на запрос 
// https://dog.ceo/api/breed/Affenpinscher/images/random
// {
//     "message": "https://images.dog.ceo/breeds/saluki/n02091831_5654.jpg",
//     "status": "success"