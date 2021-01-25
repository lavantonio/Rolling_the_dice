var firstText = document.querySelector('.firstText');
var addFirstCol = document.querySelector('#addFirstCol');
var firstBtn = document.querySelector('#firstBtn');
var rightSide = document.querySelector('#rightSide');
var leftSide = document.querySelector('#leftSide');
var addPlayer = document.querySelector('#addPlayer');
var ivoBtn = document.querySelector('#ivoBtn');
var lavBtn = document.querySelector('#lavBtn');
var kristinaBtn = document.querySelector('#kristinaBtn');
var justinaBtn = document.querySelector('#justinaBtn');
var jorgeBtn = document.querySelector('#jorgeBtn');
var vladankaBtn = document.querySelector('#vladankaBtn');
var textPlayer1 = document.querySelector('#textPlayer1');
var textPlayer2 = document.querySelector('#textPlayer2');
var ivo = document.querySelector('#ivo');
var lav = document.querySelector('#lav');
var kristina = document.querySelector('#kristina');
var justina = document.querySelector('#justina');
var vladanka = document.querySelector('#vladanka');
var jorge = document.querySelector('#jorge');
var firstColumn = document.querySelector('#firstColumn');
var htag = document.querySelector('#htag');
var rulesGame = document.querySelector('#rulesGame');
var firstColumn = document.querySelector('#firstColumn');
var lastColumn = document.querySelector('#lastColumn');
var startBtn = document.querySelector('#startBtn');
var table = document.querySelector('#table');
var tableLeft = document.querySelector('#tableLeft');
var tableRight = document.querySelector('#tableRight');
var scorePlayerOne = document.querySelector('#scorePlayerOne');
var scorePlayerTwo = document.querySelector('#scorePlayerTwo');
var oneRoundL = document.querySelector('#oneRoundL');
var twoRoundL = document.querySelector('#twoRoundL');
var threeRoundL = document.querySelector('#threeRoundL');
var fourRoundL = document.querySelector('#fourRoundL');
var fiveRoundL = document.querySelector('#fiveRoundL');
var oneRoundR = document.querySelector('#oneRoundR');
var twoRoundR = document.querySelector('#twoRoundR');
var threeRoundR = document.querySelector('#threeRoundR');
var fourRoundR = document.querySelector('#fourRoundR');
var fiveRoundR = document.querySelector('#fiveRoundR');
var endGames = document.querySelector('#endGames');

var firstPlayerBtn;
var secondPlayerBtn;
var playerOne;
var playerTwo;
var scorePlayerOne;
var scorePlayerTwo;
var countRounds;
var noneDisplay = ' ';

var counter = 0;
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var counterTimeCube = 800;
var counterCube = 0;
var countRound = 0;
var countPlayerDisplayNone = 0;

var cubesDisplay = [oneCircle, twoCircle, threeCircle, fourCircle, fiveCircle, sixCircle];
var roundTableL = ["null", oneRoundL, twoRoundL, threeRoundL, fourRoundL, fiveRoundL];
var roundTableR = ["null", oneRoundR, twoRoundR, threeRoundR, fourRoundR, fiveRoundR];

setTimeout(function (){
firstText.className = 'displayNone';
addFirstCol.classList.remove('displayNone');
firstBtn.addEventListener('click',choosePlayer);
},2000)

function choosePlayer(){
  rightSide.className = 'displayNone col-3 rowArea';
  leftSide.className = 'displayNone col-3 rowArea';
  addFirstCol.className = 'displayNone col-3';
  addPlayer.classList.remove('displayNone');
  ivoBtn.addEventListener('click',choosePlayerIvo);
  lavBtn.addEventListener('click',choosePlayerLav);
  justinaBtn.addEventListener('click',choosePlayerJustina);
  kristinaBtn.addEventListener('click',choosePlayerKristina);
  jorgeBtn.addEventListener('click',choosePlayerJorge);
  vladankaBtn.addEventListener('click',choosePlayerVladanka);
}

function choosePlayerIvo(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  ivo.className = 'backgroundBlack card';
  ivoBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Ivo";
    counter = 1;
  }
  lavBtn.addEventListener('click',addPlayerTwo);
  kristinaBtn.addEventListener('click',addPlayerTwo);
  jorgeBtn.addEventListener('click',addPlayerTwo);
  vladankaBtn.addEventListener('click',addPlayerTwo);
  justinaBtn.addEventListener('click',addPlayerTwo);
}
function choosePlayerLav(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  lav.className = 'backgroundBlack card';
  lavBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Lav";
    counter = 1;
  }
  ivoBtn.addEventListener('click',addPlayerTwo);
  kristinaBtn.addEventListener('click',addPlayerTwo);
  jorgeBtn.addEventListener('click',addPlayerTwo);
  vladankaBtn.addEventListener('click',addPlayerTwo);
  justinaBtn.addEventListener('click',addPlayerTwo);
}
function choosePlayerKristina(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  kristina.className = 'backgroundBlack card';
  kristinaBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Kristina";
    counter = 1;
  }
  lavBtn.addEventListener('click',addPlayerTwo);
  ivoBtn.addEventListener('click',addPlayerTwo);
  jorgeBtn.addEventListener('click',addPlayerTwo);
  vladankaBtn.addEventListener('click',addPlayerTwo);
  justinaBtn.addEventListener('click',addPlayerTwo);
}
function choosePlayerJorge(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  jorge.className = 'backgroundBlack card';
  jorgeBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Jorge";
    counter = 1;
  }
  lavBtn.addEventListener('click',addPlayerTwo);
  kristinaBtn.addEventListener('click',addPlayerTwo);
  ivoBtn.addEventListener('click',addPlayerTwo);
  vladankaBtn.addEventListener('click',addPlayerTwo);
  justinaBtn.addEventListener('click',addPlayerTwo);
}
function choosePlayerVladanka(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  vladanka.className = 'backgroundBlack card';
  vladankaBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Vladanka";
    counter = 1;
  }
  lavBtn.addEventListener('click',addPlayerTwo);
  kristinaBtn.addEventListener('click',addPlayerTwo);
  jorgeBtn.addEventListener('click',addPlayerTwo);
  ivoBtn.addEventListener('click',addPlayerTwo);
  justinaBtn.addEventListener('click',addPlayerTwo);
}
function choosePlayerJustina(){
  textPlayer1.className = 'displayNone';
  textPlayer2.classList.remove('displayNone');
  justina.className = 'backgroundBlack card';
  justinaBtn.className = 'displayNone';
  if (counter == 0) {
    playerOne = "Justina";
    counter = 1;
  }
  lavBtn.addEventListener('click',addPlayerTwo);
  kristinaBtn.addEventListener('click',addPlayerTwo);
  jorgeBtn.addEventListener('click',addPlayerTwo);
  vladankaBtn.addEventListener('click',addPlayerTwo);
  ivoBtn.addEventListener('click',addPlayerTwo);
}

function addPlayerTwo(){
  if (this.id == "kristinaBtn") {
    playerTwo = "Kristina";
  } else if (this.id == "lavBtn") {
    playerTwo = "Lav";
  }else if (this.id == "ivoBtn") {
    playerTwo = "Ivo";
  } else if (this.id == "justinaBtn") {
    playerTwo = "Justina";
  }else if (this.id == "vladankaBtn") {
    playerTwo = "Vladanka";
  }else if(this.id == "jorgeBtn"){
    playerTwo = "Jorge";
  }
  addPlayer.className = 'displayNone';
  afterStartGame();
}

function afterStartGame(){
  rightSide.classList.remove('displayNone');
  leftSide.classList.remove('displayNone');
  addFirstCol.classList.remove('displayNone');
  rulesGame.classList.remove('displayNone');
  htag.className = 'displayNone';
  startBtn.addEventListener('click',showPlayers)
}

function showPlayers(){
  firstColumn.classList.remove('displayNone');
  lastColumn.classList.remove('displayNone');
  addFirstCol.className = 'displayNone col-4';

  createTablePlayer();


  firstPlayerBtn.addEventListener('click',displayDice);
  }

function displayDice(){
  oneCube.classList.remove('displayNone');
  rollDiceFirstPlayer();
}

function rollDiceFirstPlayer(){
  firstPlayerBtn.classList.add('displayNone');
  var timer = setTimeout(function myTimer() {
    var rand = Math.floor(Math.random()*6);
    cubeChange();
    timer = setTimeout(myTimer, counterTimeCube);
    if (counterTimeCube == 1000){
      for (var i = 0; i < cubesDisplay.length; i++) {
        cubesDisplay[i].classList.add('displayNone');
      }
      counterTimeCube = 800;
      counterCube = 0;
      countRound++;
      cubesDisplay[rand].classList.remove('displayNone');
      rand = rand + 1;
      roundTableL[countRound].innerHTML = "Runda "+countRound+":  Poena "+rand;
      counterPlayerOne = counterPlayerOne + rand;
      createTablePlayer();
      secondPlayerBtn.addEventListener('click',rollDiceSecondPlayer);
      clearTimeout(timer);
    }
  }, 400);
}

function cubeChange(){
  var rand = Math.floor(Math.random()*6);
  if (counterCube < 3) {
    counterCube++;
    for (var i = 0; i < cubesDisplay.length; i++) {
      cubesDisplay[i].classList.add('displayNone');
    }
    cubesDisplay[rand].classList.remove('displayNone');
  }else{
    counterTimeCube = counterTimeCube + 100;
    for (var i = 0; i < cubesDisplay.length; i++) {
      cubesDisplay[i].classList.add('displayNone');
    }
    cubesDisplay[rand].classList.remove('displayNone');
  }
}

  function createTablePlayer(){
    var players = ["Ivo", "Lav", "Kristina", "Justina", "Vladanka", "Jorge"]
    var textPlay1 = '';
    var textPlay2 = '';
    countPlayerDisplayNone++;
    num = 2;
    if (countPlayerDisplayNone % num) {
      nonePlayer1Display = " "
      nonePlayer2Display ="displayNone"
    }else{
      nonePlayer1Display = "displayNone";
      nonePlayer2Display = " "
    }

    if (countRound != 0) {
      noneDisplay = ' ';
    } else {
      noneDisplay = 'displayNone';
    }
    for (var i = 0; i < players.length; i++) {
      if (players[i] == playerOne) {
        textPlay1 +='<h2>'+players[i]+'</h2>';
        textPlay1 +='<img src="img/'+players[i]+'.jpg" class="card-img-top" alt="'+players[i]+'">';
        textPlay1 +='<div class="card-body">';
        textPlay1 +='<p id="scorePlayerOne"class="lead">Ukupno poena : '+counterPlayerOne+'</p>';
        textPlay1 +='<p id = "countRounds" class = "'+noneDisplay+' pt-1">Runda '+countRound+'</p>';
        textPlay1 +='<button id="firstPlayerBtn" class="'+nonePlayer1Display+' btn btn-primary">baci kockicu</button>';
        textPlay1 +='</div>';
        }
      if (players[i] == playerTwo) {
        textPlay2 +='<h2>'+players[i]+'</h2>';
        textPlay2 +='<img src="img/'+players[i]+'.jpg" class="card-img-top" alt="'+players[i]+'">';
        textPlay2 +='<div class="card-body">';
        textPlay2 +='<p id="scorePlayerTwo" class="lead">Ukupno poena : '+counterPlayerTwo+'</p>';
        textPlay2 +='<p class = "'+noneDisplay+' pt-1">Runda '+countRound+'</p>';
        textPlay2 +='<button id="secondPlayerBtn" class="'+nonePlayer2Display+' btn btn-primary">baci kockicu</button>';
        textPlay2 +='</div>';
      }
      }
    tableLeft.innerHTML = textPlay1;
    tableRight.innerHTML = textPlay2;
    countRounds = document.querySelector('#countRounds');
    firstPlayerBtn = document.querySelector('#firstPlayerBtn');
    secondPlayerBtn = document.querySelector('#secondPlayerBtn');
    scorePlayerOne = document.querySelector('#scorePlayerOne');
    scorePlayerTwo = document.querySelector('#scorePlayerTwo');
    }

function rollDiceSecondPlayer(){
  secondPlayerBtn.classList.add('displayNone');
  var timer = setTimeout(function myTimer() {
    var rand = Math.floor(Math.random()*6);
    cubeChange();
    timer = setTimeout(myTimer, counterTimeCube);
    if (counterTimeCube == 1000){
      for (var i = 0; i < cubesDisplay.length; i++) {
        cubesDisplay[i].classList.add('displayNone');
      }
      counterTimeCube = 800;
      counterCube = 0;
      cubesDisplay[rand].classList.remove('displayNone');
      rand = rand + 1;
      roundTableR[countRound].innerHTML = "Runda "+countRound+":  Poena "+rand;
      counterPlayerTwo = counterPlayerTwo + rand;
      createTablePlayer();
      if (countRound == 1) {
        endGame();
      }
      firstPlayerBtn.addEventListener('click',rollDiceFirstPlayer);
      clearTimeout(timer);
    }
  }, 400);
}

function endGame(){
  firstColumn.classList.add('displayNone');
  lastColumn.classList.add('displayNone');
  oneCube.classList.add('displayNone');
  addFirstCol.classList.remove('displayNone');
  htag.classList.add('displayNone');
  rulesGame.classList.add('displayNone');

  readHtml();
}


function readHtml(){
  var players = ["Ivo", "Lav", "Kristina", "Justina", "Vladanka", "Jorge"]
  var text = '';
  console.log(counterPlayerOne);
  endGames.classList.remove('displayNone');
  if (playerOne == "Ivo"|| playerOne == "Lav" || playerOne == "Jorge") {
    var textWoManPlayerOne = "o";
  }else{
    var textWoManPlayerOne = "la"
  }
  if (playerTwo == "Ivo" || playerTwo == "Lav" || playerTwo == "Jorge") {
    var textWoManPlayerTwo = "o";
  }else{
    var textWoManPlayerTwo = "la"
  }
  if (counterPlayerTwo > counterPlayerOne) {
    text += '<div class="d-flex flex-column justify-content-center text-center">';
    text += '<img src="img/'+playerTwo+'.jpg" alt="'+playerTwo+'">';
    text += '<h4>***    '+playerTwo+' je pobedi'+textWoManPlayerTwo+'    ***</h4>';
    text += '<p class="align-justify">Osvoji'+textWoManPlayerTwo+' je ukupno '+counterPlayerTwo+' poena a protivnik je osvojio '+counterPlayerOne+' poena.</p>';
    text += '</div>'
  }else if(counterPlayerOne == counterPlayerTwo){
    text += '<div class="d-flex flex-column justify-content-center text-center">';
    text += '<img src="img/ida.jpg" alt="ida.jpg">';
    text += '<h4>***    NERESENO JE    ***</h4>';
    text += '<p class="align-center">Odigrajte ponovo partiju</p>';
    text += '</div>';
  }else {
    text += '<div class="d-flex flex-column justify-content-center text-center">';
    text += '<img src="img/'+playerOne+'.jpg" alt="'+playerOne+'">';
    text += '<h4>***    '+playerOne+' je pobedi'+textWoManPlayerOne+'    ***</h4>';
    text += '<p class="align-justify">Osvoji'+textWoManPlayerOne+' je ukupno '+counterPlayerOne+' poena a protivnik je osvojio '+counterPlayerTwo+' poena.</p>';
    text += '</div>'
  }

  endGames.innerHTML = text;
}
