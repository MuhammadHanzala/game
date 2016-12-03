var randomNumber = document.getElementsByClassName("random-num")[0];
var myTotal = document.getElementsByClassName("total")[0];
var bricks = document.getElementsByTagName("li");
var bricksContainer = document.getElementsByClassName("bricks_container");
var newNumber = 0;


newNumber = Math.floor(Math.random() * 35);
randomNumber.innerHTML = newNumber;


for(var i = 0; i < bricks.length; i++){
    bricks[i].addEventListener('click', clicked());
}
function clicked(){
    console.log("clicked");
}