function makeWhite() {
    document.body.style.backgroundColor = 'white';
}

//**** change bg-color using id on button tag.
const blueButton = document.getElementById('make-blue-button');
//Just set the function name, don't call it.
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//**** Handle event using anonymous function

const greenButton = document.getElementById('make-green-button');

//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//**** Handle by using event listener

const goldenRodButton = document.getElementById('make-goldenRod-button');
goldenRodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// ****direct shortcut
document.getElementById('make-lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});