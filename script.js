let button = document.getElementById("generate-pairings");
let startMenu = document.querySelector("body");
let pairingDiv = document.getElementById("pairing-div");
let pairingBox = document.getElementById("pairing-box");
let body = document.querySelector("body");
let playerNumber = document.getElementById("player-select");
let slider = document.getElementById("roundSlider");
let pairingTitle = document.getElementById("pairing-title");

let playerArray = [];
let scheduleArray = [];
let numberOfRounds = 0;
let players = 0;


slider.addEventListener("input", function(){
        pairingTitle.textContent = "Round " + slider.value ;
        fillPairingBox();
});

button.addEventListener("click", function(){

    playerArray = [];
    scheduleArray = [];
    numberOfRounds = 0;

    pairingDiv.style.display = "block";
    pairingDiv.style.display = "flex";

    pairingTitle.textContent = "Round 1";
    slider.min = 1;
    slider.max = playerNumber.value - 1;
    slider.value = 1;
    numberOfRounds = playerNumber.value - 1;

    createPlayer(playerNumber.value);
    players = playerArray.length;
    scheduleMaker(numberOfRounds, playerArray);
    fillPairingBox(playerNumber.value);

    console.log(playerArray);
});

function fillPairingBox(){

    let currentRound = slider.value;

    pairingBox.innerHTML = "";
    pairingBox.style.display = "flex";
    pairingBox.style.flexDirection = "column";
    pairingBox.style.justifyContent = "space-evenly";

    for(let i = 1; i <= players/2; i++){

        let div = document.createElement("div");

        if(scheduleArray[currentRound - 1][i - 1][0].name == "BYE" || scheduleArray[currentRound - 1][i - 1][1].name == "BYE"){
            div.textContent = scheduleArray[currentRound - 1][i - 1][0].name + " vs " + scheduleArray[currentRound - 1][i - 1][1].name;
        }
        else{
            div.textContent = scheduleArray[currentRound - 1][i - 1][0].name + scheduleArray[currentRound - 1][i - 1][2]
            + scheduleArray[currentRound - 1][i - 1][1].name;
        }

        pairingBox.appendChild(div);
    }
};

function Person(name,gamesAsWhite,gamesAsBlack,currentColor){
    this.name = name;
    this.gamesAsWhite = gamesAsWhite || 0;
    this.gamesAsBlack = gamesAsBlack || 0;
};

function createPlayer(playerNumber){

    if(playerNumber % 2 == 0){

        for(let i = 1; i <= playerNumber; i++){

            let player = new Person("Player " + i,0,0,0,[]);
            playerArray.push(player);
        };
    }

    else{

        for(let i = 1; i <= playerNumber; i++){

            let player = new Person("Player " + i,0,0,0,[]);
            playerArray.push(player);
        };
        playerArray.push(new Person("BYE",0,0,0,[]));
    }
};

function scheduleMaker(numberOfRounds, playerArray){

    if(numberOfRounds % 2 != 0){
        for(let i = 1; i <= numberOfRounds; i++){

            let roundPairings = [];

            for (let j = 1; j <= (numberOfRounds + 1)/2; j++){

                let temp1 = playerArray[j - 1];
                let temp2 = playerArray[numberOfRounds - j + 1];
                let temp3 = "";

                let pair = [];

                if(i == 1){
                    playerArray[j - 1].gamesAsWhite++;
                    playerArray[numberOfRounds - j + 1].gamesAsBlack++;
                    temp3 = " (White) vs (Black) ";
                }

                else if(j == 1){

                    if(i % 2 === 0){
                        playerArray[j - 1].gamesAsBlack++;
                        playerArray[numberOfRounds - j + 1].gamesAsWhite++;
                        temp3 = " (Black) vs (White) ";
                    }
                    else{
                        playerArray[j - 1].gamesAsWhite++;
                        playerArray[numberOfRounds - j + 1].gamesAsBlack++;
                        temp3 = " (White) vs (Black) ";
                    }
                }

                else{
                    playerArray[j - 1].gamesAsWhite++;
                    playerArray[numberOfRounds - j + 1].gamesAsBlack++;
                    temp3 = " (White) vs (Black) ";
                }
                pair.push(temp1);
                pair.push(temp2);
                pair.push(temp3);
                roundPairings.push(pair);
            }

            scheduleArray.push(roundPairings);
            shiftArray(playerArray);
        };
    }

    else{

        for(let i = 1; i <= numberOfRounds + 1; i++){

            let roundPairings = [];

            for (let j = 1; j <= (numberOfRounds + 2)/2; j++){

                let temp1 = playerArray[j - 1];
                let temp2 = playerArray[numberOfRounds - j + 2];
                let temp3 = "";

                let pair = [];

                if(i == 1){
                    playerArray[j - 1].gamesAsWhite++;
                    playerArray[numberOfRounds - j + 2].gamesAsBlack++;
                    temp3 = " (White) vs (Black) ";
                }

                else if(j == 1){

                    if(i % 2 === 0){
                        playerArray[j - 1].gamesAsBlack++;
                        playerArray[numberOfRounds - j + 2].gamesAsWhite++;
                        temp3 = " (Black) vs (White) ";
                    }
                    else{
                        playerArray[j - 1].gamesAsWhite++;
                        playerArray[numberOfRounds - j + 2].gamesAsBlack++;
                        temp3 = " (White) vs (Black) ";
                    }
                }

                else{
                    playerArray[j - 1].gamesAsWhite++;
                    playerArray[numberOfRounds - j + 2].gamesAsBlack++;
                    temp3 = " (White) vs (Black) ";
                }
                pair.push(temp1);
                pair.push(temp2);
                pair.push(temp3);
                roundPairings.push(pair);
            }

            scheduleArray.push(roundPairings);
            shiftArray(playerArray);
        };
    }
};

function shiftArray(arr) {
    const length = arr.length;
    const lastElement = arr[length - 1];
  
    for (let i = length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
  
    arr[1] = lastElement;
  };