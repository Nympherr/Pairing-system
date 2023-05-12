let button = document.getElementById("generate-pairings");
let startMenu = document.querySelector("body");
let pairingDiv = document.getElementById("pairing-div");
let pairingBox = document.getElementById("pairing-box");
let body = document.querySelector("body");
let playerNumber = document.getElementById("player-select");
let slider = document.getElementById("roundSlider");
let pairingTitle = document.getElementById("pairing-title");

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
    console.log(playerNumber.value);

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