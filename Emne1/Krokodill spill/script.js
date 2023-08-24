let numberone = Math.floor((Math.random() * 10) + 1);
let numbertwo = Math.floor((Math.random() * 10) + 1);
let MyPoints = 0;

function reset1(){
    MyPoints = 0;
    onload();

}

function onload(){

    numberone = Math.floor((Math.random() * 10) + 1);
    numbertwo = Math.floor((Math.random() * 10) + 1);
    document.getElementById("num1").innerHTML = numberone;
    document.getElementById("num2").innerHTML = numbertwo;
    document.getElementById("points").innerHTML = `Points: ${MyPoints}`;

}

function submit1(){

        let ans = document.getElementById("answer").value;

        if (MyPoints < 20) {
            if (numberone > numbertwo) {
                if (ans == '>') {
                    MyPoints++;
                }
                else {
                    MyPoints--;
                }
            }
            else if (numberone < numbertwo) {
                if (ans == '<') {
                    MyPoints++;
                }
                else {
                    MyPoints--;
                }
            }
            else if (numberone == numbertwo) {
                if (ans == '=') {
                    MyPoints++;
                }
                else {
                    MyPoints--;
                }
            }
        } 

        if (MyPoints == 10){
            document.getElementById("container").innerHTML = `<img style="height: 250px; width: 250px;" src="img/winning.jpg"/>`;

        }

        if (MyPoints < 0) {
            MyPoints = 0;
        }

        onload();
}
