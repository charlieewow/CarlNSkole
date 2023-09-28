


let inputValue = ''
let list = ['Milk', 'Apple', 'Cheese', 'Egg', 'Juice']



function updateView() {
    let html = '';

    for (let i = 0; i < list.length; i++) {
        html += `
            <li>
                ${list[i]} 
                <button onclick="changeItem(${i})">Change</button>
                <button onclick="deleteItem(${i})">Delete</button>
            </li> `
    }

    html += `<input oninput="inputValue = this.value" type="text"> <button onclick="addItem()">Legg til </button>`;
    document.getElementById("app").innerHTML = html;
}


function changeItem(index) {
    list[index] = inputValue;
    updateView();
}

function addItem() {
    list.push(inputValue);
    inputValue = "";
    updateView();
}

function deleteItem(index) {
    list.splice(index, 1);
    updateView();
}