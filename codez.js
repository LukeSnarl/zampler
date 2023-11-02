document.addEventListener("DOMContentLoaded", function(){
  setup();
});

let set = 1;

let numSets = 4;

let numSamples = 8;

let audioElements = [];
let audioSources = [];
let buttonElements = [];
let setElements = [];

function setup() {
  getElements();
  for (let x = 1; x <= numSamples; x++) {
    setSource(set, x);
    setListener(x);
  }
  setSetListeners();
  document.addEventListener('keydown', handleKeydown);
}

function getElements(){
  for (let x = 1; x <= numSamples; x++) {
    audioElements[x] = document.getElementById(`audio${x}`);
    audioElements[x].addEventListener('canplay', () => setButtonLoaded(x))
    audioSources[x] = document.getElementById(`source${x}`);
    buttonElements[x] = document.getElementById(`button${x}`);
    setElements[x] = document.getElementById(`set${x}`);
  }
}

function setSource(set, sample){
  audioSources[sample].src = `samples/set${set}/${sample}.wav`;
  audioElements[sample].load()
}

function setListener(sample){
  buttonElements[sample].addEventListener('mousedown', () => playSample(sample))
}

function setSetListeners() {
  for (let x = 1; x <= numSets; x++) {
    setElements[x].addEventListener('mousedown', () => setSet(x))
  }
}

function playSample(x) {
  if (buttonElements[x].classList.contains('loaded')) {
    audioElements[x].currentTime = 0;
    audioElements[x].play();
    // audioElements[x].loop=true;
    buttonElements[x].classList.add('playing');
    audioElements[x].addEventListener('ended', () => {
      audioElements[x].currentTime = 0;
      buttonElements[x].classList.remove('playing');
    })
  }
}

function setSet(x) {
  setElements[set].classList.remove('active')
  set = x;
  setElements[x].classList.add('active')
  for (let x = 1; x <= numSamples; x++) {
    buttonElements[x].classList.remove('loaded');
    buttonElements[x].classList.remove('playing');
    setSource(set, x);
  }
}

function setButtonLoaded(x) {
  buttonElements[x].classList.add('loaded')
}

function handleKeydown(e) {
  e.preventDefault()
  if (e.code == "Digit1") {
    playSample(1)
  }
  if (e.code == "Digit2") {
    playSample(2)
  }
  if (e.code == "Digit3") {
    playSample(3)
  }
  if (e.code == "Digit4") {
    playSample(4)
  }
  if (e.code == "Digit5") {
    playSample(5)
  }
  if (e.code == "Digit6") {
    playSample(6)
  }
  if (e.code == "Digit7") {
    playSample(7)
  }
  if (e.code == "Digit8") {
    playSample(8)
  }

  if (e.code == "ArrowDown") {
    setSet((set + 1) > numSets ? 1 : (set + 1));
  }

  if (e.code == "ArrowUp") {
    setSet((set - 1) < 1 ? numSets : (set - 1));
  }
  console.log(e.code)
}