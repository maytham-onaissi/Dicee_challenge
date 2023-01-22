function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var randomNumber1 = generateRandomNumber(1,6);
const imgOne = document.querySelector(".img1");

function setImageOne(){
  if (randomNumber1 === 1) {
    imgOne.setAttribute("src", "images/dice1.png");
  }else if (randomNumber1 === 2) {
    imgOne.setAttribute("src", "images/dice2.png");
  } else if(randomNumber1 === 3){
    imgOne.setAttribute("src", "images/dice3.png");
  } else if(randomNumber1 === 4){
    imgOne.setAttribute("src", "images/dice4.png");
  } else if(randomNumber1 === 5){
    imgOne.setAttribute("src", "images/dice5.png");
  } else if(randomNumber1 === 6){
    imgOne.setAttribute("src", "images/dice6.png");
  }
}

var randomNumber2 = generateRandomNumber(1,6);
const imgTwo = document.querySelector(".img2");

function setImageTwo(){
  if (randomNumber2 === 1) {
    imgTwo.setAttribute("src", "images/dice1.png");
  }else if (randomNumber2 === 2) {
    imgTwo.setAttribute("src", "images/dice2.png");
  } else if(randomNumber2 === 3){
    imgTwo.setAttribute("src", "images/dice3.png");
  } else if(randomNumber2 === 4){
    imgTwo.setAttribute("src", "images/dice4.png");
  } else if(randomNumber2 === 5){
    imgTwo.setAttribute("src", "images/dice5.png");
  } else if(randomNumber2 === 6){
    imgTwo.setAttribute("src", "images/dice6.png");
  }
}

function winner(){
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
  }  
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";

  }  
}

setImageOne();
setImageTwo();
winner();