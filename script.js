const neutralpompom = document.querySelector('#pompom-image');
const hereforyouButton = document.querySelector('#btn1');
const lovelyButton = document.querySelector('#btn2');
const yourecuteButton = document.querySelector('#btn3');
const pompomImage = document.querySelector('#pompom-image');

// Array images, hulp van chatGPT
const pompomhappinessgrowing = [
    'images/pompom1.png', // 10%
    'images/pompom2.png', // 25%
    'images/pompom3.png', // 50%
    'images/pompom4.png', // 75%
    'images/pompom5.png'  // 100%
];

// https://youtu.be/aTiOiMuSznE?si=9e8gw5b65YNpukYa, audio code van chatGPT
const clickSound = new Audio('audio/twinkleaudio.mpeg');

// begin happiness level
let happiness = 10;
let happinessindex = 0;

//met hulp van student
function growinghappiness(){

if (happinessindex < pompomhappinessgrowing.length){

    neutralpompom.src = pompomhappinessgrowing[happinessindex];
// audio code van chatGPT
    clickSound.play();

    happinessindex = happinessindex + 1;
}   else if (happinessindex == pompomhappinessgrowing.length){
    tekst.textContent = "pompom is happy"}

}

hereforyouButton.addEventListener('click', growinghappiness);
lovelyButton.addEventListener('click', growinghappiness);
yourecuteButton.addEventListener('click', growinghappiness);

