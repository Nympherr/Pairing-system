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


slider.addEventListener("input", function(){
        pairingTitle.textContent = "Round " + slider.value ;
});

button.addEventListener("click", function(){

    pairingDiv.style.display = "block";
    pairingDiv.style.display = "flex";
    body.style.gap = "50px";

    slider.min = 1;
    slider.max = playerNumber.value - 1;
    slider.value = 1;

    fillPairingBox(playerNumber.value);
    createPlayer(playerNumber.value);
    console.log(playerArray);
    numberOfRounds = playerNumber.value - 1;

    scheduleMaker(numberOfRounds, playerArray);

});

function fillPairingBox(numberOfPlayers){

    pairingBox.innerHTML = "";

    pairingBox.style.display = "flex";
    pairingBox.style.flexDirection = "column";
    pairingBox.style.justifyContent = "space-evenly";
    for(let i = 1; i <= numberOfPlayers; i++){

        let div = document.createElement("div");
        div.textContent = "Player vs Player " + i;
        pairingBox.appendChild(div);
    
    }
};

function Person(name,whitePieces,blackPieces,rounds,opponents){
    this.name = name;
    this.whitePieces = whitePieces;
    this.blackPieces = blackPieces;
    this.rounds = rounds;
    this.opponents = opponents;
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
        playerArray.push("BYE");
    }
};

function scheduleMaker(numberOfRounds, playerArray){

    if(numberOfRounds % 2 != 0){
        for(let i = 1; i <= numberOfRounds; i++){

            let roundPairings = [];

            for (let j = 1; j <= (numberOfRounds + 1)/2; j++){

                let pair = [];
                pair.push(playerArray[j - 1]);
                pair.push(playerArray[numberOfRounds - j + 1]);
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

                let pair = [];
                pair.push(playerArray[j - 1]);
                pair.push(playerArray[numberOfRounds - j + 2]);
                roundPairings.push(pair);
            }

            scheduleArray.push(roundPairings);
            shiftArray(playerArray);
        };

    }

    console.log(scheduleArray);
};

function shiftArray(arr) {
    const length = arr.length;
    const lastElement = arr[length - 1];
  
    for (let i = length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
  
    arr[1] = lastElement;
  }
