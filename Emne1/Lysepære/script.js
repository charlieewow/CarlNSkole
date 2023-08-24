/* MODELL */

let lighton = false;
let lightclass = "bulboff";
let button_val = "Turn On";

/* END MODELL */

/* VIEW */
function updatehtml() {
    document.getElementById("container1").innerHTML = /*HTML*/`
    <div class="${lightclass}"></div>
    <div class="bot"></div>
    <button class="button" onclick="togglelight()">${button_val}</button>
    
    
    
    `;
}
/* END VIEW */

/* CONTROLLER */
function togglelight() {
    if (!lighton) {
        lighton = true;
        lightclass = "bulbon";
        button_val = "Turn Off";

        updatehtml();
    }
    else{
        lighton = false;
        lightclass = "bulboff";
        button_val = "Turn On";

        updatehtml();
    }

}
/* END CONTROLLER */

