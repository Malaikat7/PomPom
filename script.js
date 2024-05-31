const image = document.querySelector('#pompom-image');
const hereforyouButton = document.querySelector('#btn1');
const petherButton = document.querySelector('#btn2');
const yourecuteButton = document.querySelector('#btn3');

// Array images
const images = [
    'images/pompom1.png', // 10%
    'images/pompom2.png', // 25%
    'images/pompom3.png', // 50%
    'images/pompom4.png', // 75%
    'images/pompom5.png'  // 100%
];

// Array specifieke levels
const happinessLevels = [10, 25, 50, 75, 100];

// begin happiness level
let happiness = 10;
let happinessindex = 0

// Change image per happiness level
function changeImage() {
    const pompomImage = document.querySelector('#pompom-image');
    if (happiness >= 100) {
        pompomImage.src = images[4];
    } else if (happiness >= 75) {
        pompomImage.src = images[3];
    } else if (happiness >= 50) {
        pompomImage.src = images[2];
    } else if (happiness >= 25) {
        pompomImage.src = images[1];
    } else {
        pompomImage.src = images[0];
    }
}

function changeImage() {
    image.src = 'images/pompom2.png';
}

function changeImage() {
    image.src = 'images/pompom3.png';
}

function changeImage() {
    image.src = 'images/pompom4.png';
}

hereforyouButton.addEventListener('click', changeImage);
petherButton.addEventListener('click', changeImage);
yourecuteButton.addEventListener('click', changeImage);

document.querySelector('#btn1').addEventListener('click', ButtonClick);
document.querySelector('#btn2').addEventListener('click', ButtonClick);
document.querySelector('#btn3').addEventListener('click', ButtonClick);
