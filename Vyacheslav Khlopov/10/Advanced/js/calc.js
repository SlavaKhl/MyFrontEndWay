let output   =  document.getElementById('output');
let buttons  = document.getElementsByClassName('btn');
let history = document.getElementById('history');
let id       = '';
let type     = '';
let eqaution = '';
let historyList = JSON.parse(localStorage.getItem('calcHistory')) || [];

output.innerHTML = localStorage.getItem('LastResult');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        id = this.getAttribute('data-id');
        type = this.getAttribute('data-type');

        switch (type) {
            case "operator":
                operator();                
                break;
            
            case "number":
                numberClick();                
                break;
            
            case "equal":
                equal();                
                break;

            case "symbol":
                symbol();                
                break;

            case "clear":
                clear();                
                break;
        
            default:
                break;
        }
    }) 
}

let saveToLocalStorage = (eqaution) => {
    let historyItem = {
        eqaution: `${eqaution} = ${eval(eqaution)}`
    }

    historyList.push(historyItem);

    localStorage.setItem('calcHistory', JSON.stringify(historyList));
}

let loadFromLocalSorage = () => {
    history.innerHTML = ``;

    for (let i = 0; i < historyList.length; i++) {
        history.innerHTML += `<li class="history__item"> ${historyList[i].eqaution} </li>`
               
    }
}

let equal = () => {
    saveToLocalStorage(eqaution);
    
    let result = eval(eqaution);
    eqaution = result;
    output.innerHTML = result; 

    loadFromLocalSorage();
}

let operator = () => {
    eqaution += id;
    output.innerHTML = eqaution;
}

let numberClick = () => {
    eqaution += id;
    output.innerHTML = eqaution;
}

let clear = () => {
    output.innerHTML = "0";
}

document.addEventListener('keyup', function(event) {
    console.log(event);

    for (let i = 0; i < buttons.length; i++) {
        let id         = buttons[i].getAttribute('data-id');
        let pressedKey = event.key;

        if (id === pressedKey) {
            buttons[i].click();
        } else {
            console.log('Error');
        }
    }

})

loadFromLocalSorage();