

let finalAnswer = ["Ja", "Nei", "Kansjke", "Aldrig", "Oftest", "Muligt", "Spør igjen",];
let wrapper = document.getElementById('wrapper');
let answer2 = "";




function updateView() {
    wrapper.innerHTML = /*HTML*/ `

    <div class="container">
            
            <div id="centertext" class="centertext">${answer2}</div>
            
            
        </div>
        
        <button onclick="answer()" class="button">Get Answer</button>
        `
}

function answer(){
    let RandomAnswer = finalAnswer[Math.floor(Math.random() * finalAnswer.length)];
    answer2 = RandomAnswer;
    updateView();


}




