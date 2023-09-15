




function updateview() {
    document.getElementById('wrapper').innerHTML = /*HTML*/`
       
    <Button onclick="printnumber()">Print numbers</Button>
    <div id="numbers" class="numbers"></div>

    `

}

function printnumber() {
    let stopValue = 20;
    for (let counter = 2; counter <= stopValue; counter+=2) {
        document.getElementById('numbers').innerHTML += '<li>' + counter + '</li>';
    }
}