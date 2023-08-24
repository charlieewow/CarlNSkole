var name2 = "___";
var city2 = "___";
var food2 = "___";
var hobby2 = "___";

function loadthis() {
    document.getElementById('container').innerHTML = /*HTML*/`
    <div class="story">
            <div>Hej jeg heter</div>
            <div class="name" id="name">${name2}</div>
            <div>og jeg bor i</div>
            <div class="city" id="city">${city2}.</div>
            <div>Min favorit mat er</div>
            <div class="food" id="food">${food2}.</div>
            <div>Jeg liker og</div>
            <div class="hobby" id="hobby">${hobby2}.</div>

        </div>
        <div class="spill">
            <div class="button" id="name1" onclick="setname(this.innerHTML)">Ola</div>
            <div class="button" id="name1" onclick="setname(this.innerHTML)">Svein</div>
            <div class="button" id="name1" onclick="setname(this.innerHTML)">Adrian</div>
            <div class="button" id="name1" onclick="setname(this.innerHTML)">Terje</div>
            <div class="button" id="city1" onclick="setcity(this.innerHTML)">Oslo</div>
            <div class="button" id="city1" onclick="setcity(this.innerHTML)">Larvik</div>
            <div class="button" id="city1" onclick="setcity(this.innerHTML)">Bergen</div>
            <div class="button" id="city1" onclick="setcity(this.innerHTML)">Trondheim</div>
            <div class="button" id="food1" onclick="setfood(this.innerHTML)">taco</div>
            <div class="button" id="food1" onclick="setfood(this.innerHTML)">pizza</div>
            <div class="button" id="food1" onclick="setfood(this.innerHTML)">kebab</div>
            <div class="button" id="food1" onclick="setfood(this.innerHTML)">pasta</div>
            <div class="button" id="hobby1" onclick="sethobby(this.innerHTML)">gå toppturer</div>
            <div class="button" id="hobby1" onclick="sethobby(this.innerHTML)">sykkle</div>
            <div class="button" id="hobby1" onclick="sethobby(this.innerHTML)">løpe</div>
            <div class="button" id="hobby1" onclick="sethobby(this.innerHTML)">spille</div>
          

        </div>
    
    
    
    `;


}

function setname(input) {
    name2 = input;
    loadthis();

}

function setcity(input){
    city2 = input;
    loadthis();
}

function setfood(input){
    food2 = input;
    loadthis();

}

function sethobby(input){
    hobby2 = input;
    loadthis();

}