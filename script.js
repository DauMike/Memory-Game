const cluePauseTime = 333;
const nextClueWaitTime = 1000;
//Global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  generatePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

const freqMap = {
  1: 589.03,
  2: 1176.30,
  3: 700,
  4: 965.50,
  5: 880
}

function playTone(btn,len){
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){stopTone()},len);
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
}

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for(let i = 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 20;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
    if(mistakes == 3){
      loseGame();
    }
    else{
      alert("You got " + mistakes + " mistakes. Careful. Try Again!");
      playClueSequence();
    }
  }
}

function generatePattern(){
  for(let i = 0; i < 8; i++){
    pattern[i] = Math.floor((Math.random() * 5) + 1);
  }
}