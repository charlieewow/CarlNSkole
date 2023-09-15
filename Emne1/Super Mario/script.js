
let currentcharacter = "Mario"
let currentenemy = "Bowser"

let health = 100
let max_health = 100
let attack = 25

let enemy_health = 300
let enemy_max_health = 300
let enemy_attack = 20

let bowser = 300
let mario = 200
let peach = 100
let yoshi = 80
let luigi = 140


function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="w3-light-grey">
     <div class="w3-container w3-red w3-center" style="height: 25px; width:${Math.floor((enemy_health / enemy_max_health)*100)}%">${currentenemy} HP: ${enemy_health}/ ${enemy_max_health}</div>
    </div>
    <div id="screen">
    
    <img  style="object-fit: contain; width: 50%;" src="bilder/${currentcharacter}.png"/>
    <img onclick="doAttack()" style="object-fit: contain; width: 50%;" src="bilder/${currentenemy}.png"/>
    
    </div>
    <div class="w3-light-grey">
     <div class="w3-container w3-green w3-center" style="height: 25px; width:${Math.floor((health / max_health)*100)}%">${currentcharacter} HP: ${health}/ ${max_health}</div>
    </div>

    <div class="char_select">
        <div class="char" onclick="choose('Mario')">
            <img src="bilder/Mario.png"/>
        </div>
        <div class="char" onclick="choose('Luigi')">
            <img src="bilder/Luigi.png" alt="">
        </div>
        <div class="char" onclick="choose('Peach')">
            <img src="bilder/Peach.png" alt="">
        </div>
        <div class="char" onclick="choose('Yoshi')">
            <img src="bilder/Yoshi.png" alt="">
        </div>
    </div>
    
`;
}

function choose(value) {
    currentcharacter = value;
    
    if (value == 'Mario') {
        health = mario;
        max_health = mario;
    } else if (value == 'Luigi') {
        health = luigi;
        max_health = luigi;
    }
    else if (value == 'Peach') {
        health = peach;
        max_health = peach;
    }
    else if (value == 'Yoshi') {
        health = yoshi;
        max_health = yoshi;
    }



    updateView();

}

function doAttack() {
    if (health <= 0 || enemy_health <= 0){
        return;
    }

    health -= enemy_attack;
    enemy_health -= attack;

    if (health < 0) {
        health = 0
    }
    if (enemy_health < 0) {
        enemy_health = 0
    }

    updateView();
    
}

function restart(){
    location.reload()

}

choose('Mario');