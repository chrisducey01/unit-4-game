var crystal1, crystal2, crystal3, crystal4;
var numberToReach;
var userNumber = 0;


function randomNumberGenerator(start, end){
    var randomNumber;

    randomNumber = Math.floor(Math.random() * (end - start) + start);

    return randomNumber;
}

function initGameTurn(){
    crystal1 = randomNumberGenerator(1,19);
    crystal2 = randomNumberGenerator(1,19);
    crystal3 = randomNumberGenerator(1,19);
    crystal4 = randomNumberGenerator(1,19);
    numberToReach = randomNumberGenerator(19,120);

    userNumber = 0;

    $("#numberToReach").text(numberToReach);
}

// $(document).ready(){

// }

$("#crystal1").click(function(){
    userNumber += crystal1;
    console.log(userNumber);
});

$("#crystal2").click(function(){
    userNumber += crystal2;
    console.log(userNumber);
});


initGameTurn();