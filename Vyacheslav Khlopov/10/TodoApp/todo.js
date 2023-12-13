// определение переменных...
const taskAdder = document.querySelector('.taskAdder');
const myTasks   = document.querySelector('.myTasks');
// получение массива/объекта из хранилища для каждой из введенных задач...
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];


// задание логики приложения и определение необходимых функций...

// функция введения новых задач...
let addTask = (e) => {
    e.preventDefault();
    let textTask = document.querySelector(`[name=task]`).value; 

    const task = {
        "name": textTask,
        "done": false
        }
    
    tasks.push(task);
    saveToLocalStorage();
    loadFromLocalStorage();

}

// функция создания локального хранилища...
let saveToLocalStorage = (textTask) => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

// функция вывода из локального хранилища...
let loadFromLocalStorage = () => {
    // let dataToload = localStorage.getItem('taskList');
    myTasks.innerHTML = ``;

    tasks.forEach((element, index) => {
        
        if (element.done) {
            myTasks.innerHTML += 
            `<li class="done" data-index="${index}">${element.name}<span class="remove">❌</span></li>`;
        } else {
            myTasks.innerHTML += 
            `<li data-index="${index}">${element.name}<span class="remove">❌</span></li>`;    
        }    
        
        // или более высокий уровень написания кода...
        // let myClass = element.done ? 'done' : "";

        // myTasks.innerHTML += 
        //     `<li class="${myClass}" data-index="${index}">${element.name}<span class="remove">❌</span></li>`;
    });    
}

// функция обработки текущего состояния задач... 
function toogleDone(e) {
    const myEl = e.target;
    const mySel = myEl.parentElement;

    if (myEl.className === `remove`) {
        let index = mySel.dataset.index;
        let temp = tasks.splice(index, 1);

    } else {
        // myEl.className.toogle('done');
        tasks[myEl.dataset.index].done = !tasks[myEl.dataset.index].done;

    }

    saveToLocalStorage();
}

// прослушивание событий...
taskAdder.addEventListener('submit', addTask);
myTasks.addEventListener('click', toogleDone);

loadFromLocalStorage();