const square1 = document.getElementById('square1');
const redBox = document.getElementById('redBox');

redBox.addEventListener('click', () => {
    square1.style.backgroundColor = 'green';
    square1.style.width = '100px';
    square1.style.height = '100px';
});


const square2 = document.getElementById('square2');
const pinkBox = document.getElementById('pinkBox');

pinkBox.addEventListener('click', () => {
    square2.style.backgroundColor = 'blue';
    console.log(square2.style.backgroundColor);
});


const square3 = document.getElementById('square3');
const sizeBox = document.getElementById('sizeBox');

sizeBox.addEventListener('click', () => {
    const currentWidth = parseInt(square3.style.width);
    const currentHeight = parseInt(square3.style.height);
    square3.style.width = currentWidth + 20 + 'px';
    square3.style.height = currentHeight + 20 + 'px';
});

const root = document.querySelector('.root');
const addParagraphButton = document.getElementById('addParagraphButton');
let currentColor = 'blue';

addParagraphButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.style.color = currentColor;
    paragraph.textContent = 'Произвольный текст';
    root.appendChild(paragraph);

    if (currentColor === 'blue') {
        currentColor = 'green';
    } else {
        currentColor = 'blue';
    }
});