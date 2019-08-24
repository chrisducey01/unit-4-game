
var crystalCollector = {
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
    scoreToReach: 0,
    userScore: 0,
    wins: 0,
    losses: 0,

    randomNumberGenerator : function(start, end){
        var randomNumber;
        randomNumber = Math.floor(Math.random() * (end - start) + start);
        return randomNumber;
    }
};


function initGame(){
  crystalCollector.wins = 0;
  crystalCollector.losses = 0;

  initGameTurn();
}

function initGameTurn(){
    crystalCollector.crystal1 = crystalCollector.randomNumberGenerator(1,19);
    crystalCollector.crystal2 = crystalCollector.randomNumberGenerator(1,19);
    crystalCollector.crystal3 = crystalCollector.randomNumberGenerator(1,19);
    crystalCollector.crystal4 = crystalCollector.randomNumberGenerator(1,19);
    crystalCollector.scoreToReach = crystalCollector.randomNumberGenerator(19,120);
    crystalCollector.userScore = 0;
    updateUI();
}

function updateUI(){
    $("#scoreToReach").text(crystalCollector.scoreToReach);
    $("#userScore").text(crystalCollector.userScore);
    $("#wins").text(crystalCollector.wins);
    $("#losses").text(crystalCollector.losses);
}

function checkScore(addValue){
    crystalCollector.userScore += addValue;
    $("#userScore").text(crystalCollector.userScore);

    if(crystalCollector.userScore > crystalCollector.scoreToReach){
        alert("Sorry you lose!  Your guess went over the score to reach.");
        crystalCollector.losses++;
        initGameTurn();
    }
    else if(crystalCollector.userScore == crystalCollector.scoreToReach){
        alert("Congratulations you won!");
        crystalCollector.wins++;
        initGameTurn();
    }
}

$(document).ready(function(){
    initGame();
});

$("#crystal1").click(function(){
    checkScore(crystalCollector.crystal1);
});

$("#crystal2").click(function(){
    checkScore(crystalCollector.crystal2);
});

$("#crystal3").click(function(){
    checkScore(crystalCollector.crystal3);
});

$("#crystal4").click(function(){
    checkScore(crystalCollector.crystal4);
});


