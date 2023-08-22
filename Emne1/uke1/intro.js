function closeHeaders() {
    document.getElementById('cardTools').innerHTML = "";
    document.getElementById('cardHtml').innerHTML = "";
    document.getElementById('cardCss').innerHTML = "";
    document.getElementById('cardJavaScript').innerHTML = "";
    document.getElementById('cardGame').innerHTML = "";
}

function showTools() {
    closeHeaders();
    document.getElementById("cardTools").innerHTML =/*html*/`

    <div class="innerCard">
    De to viktigste verktøyene vi skal bruke er disse:
    <ul>
        <li>
            Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            <br>Vi skal bruke noen <i>extensions</i>:
            <ul>
                <li>JavaScript-booster</li>
                <li>es6-string-html</li>
                <li>live-server</li>
                <li>live-share</li>
            </ul>
        </li>
        <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
    </ul>
</div>
`;

}

function showHtml() {
    closeHeaders();
    document.getElementById("cardHtml").innerHTML =/*html*/`

    <div class="innerCard">
    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li>&lt;div&gt;</li>
        <li>&lt;input type="text"&gt;</li>
        <li>&lt;button&gt;</li>
        <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
        </li>
    </ul>
</div>


`;
}

function showCss() {
    closeHeaders();
    document.getElementById("cardCss").innerHTML =/*html*/ `
    
    <div class="innerCard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li>background-color</li>
        <li>color</li>
        <li>padding</li>
        <li>margin</li>
        <li>border</li>
        <li>text-align</li>
        <li>font-size</li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>
</div>
    `
}


function showJavaScript() {
    closeHeaders();
    document.getElementById("cardJavaScript").innerHTML =/*html*/ `
    <div class="innerCard">
                Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
                ved
                å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                <ul>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                        Moodle.</li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                            Reference</a></li>

                </ul>
            </div>
    
    `
}

function showGame() {
    closeHeaders();
    document.getElementById("cardGame").innerHTML =/*html*/ `
    <div id="head" class="bodyPart">
    <button class="button" onclick="headL()">◀</button>
        <div id="headimage">
        <img src="img/head1.png">
        </div>
    <button class="button" onclick="headR()">▶</button>
</div>
<div id="body" class="bodyPart">
    <button class="button" onclick="bodyL()">◀</button>
        <div id="bodyimage">
        <img src="img/body1.png">
        </div>
    <button class="button" onclick="bodyR()">▶</button>
</div>
<div id="legs" class="bodyPart">
    <button class="button" onclick="legsL()">◀</button>
        <div id="legsimage">
        <img src="img/legs1.png">
        </div>
    <button class="button" onclick="legsR()">▶</button>
</div>
    
    `
}

var head = 1;
var body = 1;
var legs = 1;

function headL() {
    if (head == 1) {
        document.getElementById('headimage').innerHTML = '<img src="img/head4.png">';
        head = 4;
    }

    else if (head == 4) {
        document.getElementById('headimage').innerHTML = '<img src="img/head3.png">';
        head = 3;
    }

    else if (head == 3) {
        document.getElementById('headimage').innerHTML = '<img src="img/head2.png">';
        head = 2;
    }

    else if (head == 2) {
        document.getElementById('headimage').innerHTML = '<img src="img/head1.png">';
        head = 1;
    }

}

function headR() {
    if (head == 1) {
        document.getElementById('headimage').innerHTML = '<img src="img/head2.png">';
        head = 2;
    }

    else if (head == 2) {
        document.getElementById('headimage').innerHTML = '<img src="img/head3.png">';
        head = 3;
    }

    else if (head == 3) {
        document.getElementById('headimage').innerHTML = '<img src="img/head4.png">';
        head = 4;
    }

    else if (head == 4) {
        document.getElementById('headimage').innerHTML = '<img src="img/head1.png">';
        head = 1;
    }

}

function bodyL() {
    if (body == 1) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body4.png">';
        body = 4;
    }

    else if (body == 4) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body3.png">';
        body = 3;
    }

    else if (body == 3) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body2.png">';
        body = 2;
    }

    else if (body == 2) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body1.png">';
        body = 1;
    }

}

function bodyR() {
    if (body == 1) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body2.png">';
        body = 2;
    }

    else if (body == 2) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body3.png">';
        body = 3;
    }

    else if (body == 3) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body4.png">';
        body = 4;
    }

    else if (body == 4) {
        document.getElementById('bodyimage').innerHTML = '<img src="img/body1.png">';
        body = 1;
    }

}

function legsR() {
    if (legs == 1) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs2.png">';
        legs = 2;
    }

    else if (legs == 2) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs3.png">';
        legs = 3;
    }

    else if (legs == 3) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs4.png">';
        legs = 4;
    }

    else if (legs == 4) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs1.png">';
        legs = 1;
    }

}

function legsL() {
    if (legs == 1) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs4.png">';
        legs = 4;
    }

    else if (legs == 4) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs3.png">';
        legs = 3;
    }

    else if (legs == 3) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs2.png">';
        legs = 2;
    }

    else if (legs == 2) {
        document.getElementById('legsimage').innerHTML = '<img src="img/legs1.png">';
        legs = 1;
    }

}

function horisontalLayout() {
    document.getElementById('allcards').style.display = 'flex';
    document.getElementById('allcards').style.justifyContent = 'start';
    document.getElementById('allcards').style.flexDirection = 'row';


}

function vertikalLayout() {
    document.getElementById('allcards').style.display = 'flex';
    document.getElementById('allcards').style.flexDirection = 'column';

}

function gridLayout() {
    document.getElementById('allcards').style.display = 'grid';
    document.getElementById('allcards').style.gridTemplateColumns = '510px 510px';
    document.getElementById('allcards').style.gridTemplateRows = 'auto';
    document.getElementById('allcards').style.gridTemplateAreas =
        "header header"
    "main main"
    "footer";

}

function ingenLayout() {
    document.getElementById('allcards').style.display = 'block';


}
